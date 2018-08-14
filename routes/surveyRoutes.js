const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Survey = mongoose.model('surveys');

module.exports = app => {
  //the req.body is undefined!!! this is your problem

  app.get('/api/surveys', async (req, res) => { //requireLogin ???
    const surveys = await Survey.find({ _user: req.user.id });

    res.send(surveys);
  });

  app.post('/api/surveys', async (req, res) => {
    console.log("the request body is JAKE")
    console.log(req);
    const { title, subject, body } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      _user: req.user.id,
      dateSent: Date.now()
    });

    try {
      await survey.save();
      const user = await req.user.save();
      res.send(user);
      //const user = await req.user.save();
      console.log("saving user survey to db")
      //res.send(user);
    } catch(err) {
      res.status(422).send(err);
    }
  });
};
