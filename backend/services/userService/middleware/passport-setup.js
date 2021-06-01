const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const config = require('config');
const secretOrKey = config.get('secretOrkey');
const RefreshToken = config.get('RefreshToken');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
  expiresIn: '1m',
};

passport.initialize();
passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    // console.log(jwt_payload);
    const {id} = jwt_payload;
    // const RefreshToken = jwt.sign({user: {_id, username}}, REFRESH_TOKEN_SECRET, {
    //   expiresIn: '1d',
    // });
    try {
      // await new Token({token: refreshToken}).save();
      const user = await User.findById(id).select('-password');
      user ? done(null, user) : done(null, false);
    } catch (error) {
      console.log(error);
    }
  })
);

module.exports = isAuth = () => passport.authenticate('jwt', {session: false});
