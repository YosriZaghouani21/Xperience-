const User = require("../../userService/model/User");
// const Experience = require("../models/Experience");
const Experiences = require("../models/Experience");
//Filter, sorting and paginating jjsdhjqhdq
class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filtering() {
    const queryObj = { ...this.queryString }; //queryString = req.query

    const excludedFields = ["page", "sort", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b(gte|gt|lt|lte|regex)\b/g,
      (match) => "$" + match
    );

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
    this.query.find(JSON.parse(queryStr));

    return this;
  }
  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-createdAt");
    }

    return this;
  }
  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const experienceController = {
  getExperiences: async (req, res) => {
    try {
      //console.log(req.query)
      const features = new APIfeatures(Experiences.find(), req.query)
        .filtering()
        .sorting()
        .paginating();
      const experiences = await features.query;

      res.json({
        status: "success",
        experiencesCount: experiences.length,
        experiences: experiences,
      });

      //console.log(experiences)
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createExperience: async (req, res) => {
    try {
      //admin and user can create, delete and update "experiences créées"
      const {
        type,
        sessions,
        title,
        activity,
        startHour,
        endHour,
        language,
        city,
        themes,
        difficulty,
        program,
        target,
        phobia,
        includedEq,
        excludedEq,
        price,
        isPublished,
        isBeingValidated,
        isValidated,
        isCreated,
        limitParticipants,
        userID,
      } = req.body;
      const newExperience = new Experiences({
        type,
        sessions,
        title,
        activity,
        startHour,
        endHour,
        language,
        city,
        themes,
        difficulty,
        program,
        target,
        phobia,
        includedEq,
        excludedEq,
        price,
        isPublished,
        isBeingValidated,
        isValidated,
        isCreated,
        limitParticipants,
        userID,
      });

      await newExperience.save();
      console.log("req.body : ", req.body);
      res.json({
        msg: "expérience créée avec succes",
        experience: newExperience,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  // createExperience: async (req, res) => {
  //   const userId = req.params.id;
  //   console.log("hello its me !", userId);
  //   try {
  //     //admin and user can create, delete and update "experiences créées"
  //     const {
  //       type,
  //       sessions,
  //       title,
  //       activity,
  //       startHour,
  //       endHour,
  //       language,
  //       city,
  //       themes,
  //       difficulty,
  //       program,
  //       target,
  //       phobia,
  //       includedEq,
  //       excludedEq,
  //       price,
  //       isPublished,
  //       isBeingValidated,
  //       isValidated,
  //       isCreated,
  //       limitParticipants,
  //     } = req.body;

  //     const newExperience = new Experience({
  //       type,
  //       sessions,
  //       title,
  //       activity,
  //       startHour,
  //       endHour,
  //       language,
  //       city,
  //       themes,
  //       difficulty,
  //       program,
  //       target,
  //       phobia,
  //       includedEq,
  //       excludedEq,
  //       price,
  //       isPublished,
  //       isBeingValidated,
  //       isValidated,
  //       isCreated,
  //       limitParticipants,
  //     });

  //     await newExperience.save();
  //     const searchedUser = await User.findByIdAndUpdate(
  //       userId,
  //       { $push: { myExperiences: newExperience._id } },
  //       { new: true, useFindAndModify: false }
  //     );
  //     const experience = await Experience.findByIdAndUpdate(
  //       newExperience._id,
  //       { $push: { userID: userId } },
  //       { new: true, useFindAndModify: false }
  //     );
  //     return res.json({ user: searchedUser, experience: experience });
  //   } catch (err) {
  //     return res.status(500).json({ msg: err.message });
  //   }
  // },
  //Delete experience => /api/experience/:id
  deleteExperience: async (req, res) => {
    try {
      await Experiences.findByIdAndDelete(req.params.id);
      res.json({ msg: "Expérience supprimée avec succès" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateExperience: async (req, res) => {
    try {
      const {
        type,
        sessions,
        title,
        activity,
        startHour,
        endHour,
        language,
        city,
        themes,
        difficulty,
        program,
        target,
        phobia,
        includedEq,
        excludedEq,
        price,
        isPublished,
        isBeingValidated,
        isValidated,
        isCreated,
        limitParticipants,
        userID,
      } = req.body;
      await Experiences.findByIdAndUpdate(
        { _id: req.params.id },
        {
          type,
          sessions,
          title,
          activity,
          startHour,
          endHour,
          language,
          city,
          themes,
          difficulty,
          program,
          target,
          phobia,
          includedEq,
          excludedEq,
          price,
          isPublished,
          isBeingValidated,
          isValidated,
          isCreated,
          limitParticipants,
          userID,
        }
      );
      res.json({ msg: "L'expérience a été modifié avec succès" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getSingleExperience: async (req, res) => {
    try {
      const experience = await Experiences.findById(req.params.id);
      res.json({ status: "success", experience: experience });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  uploadImage: async (req, res) => {
    try {
      const fileStr = req.body.data;
      console.log(fileStr);
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = experienceController;
