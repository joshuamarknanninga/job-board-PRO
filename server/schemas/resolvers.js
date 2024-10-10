// resolvers.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Job = require('../models/Job');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (_, __, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');
      return await User.findById(user.id);
    },
    jobs: async () => {
      return await Job.find().sort({ createdAt: -1 });
    },
    searchJobs: async (_, { term }) => {
      const regex = new RegExp(term, 'i');
      return await Job.find({
        $or: [
          { title: regex },
          { company: regex },
          { location: regex },
        ],
      });
    },
  },
  Mutation: {
    signup: async (_, { username, email, password }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) throw new Error('User already exists');

      const user = new User({ username, email, password });
      await user.save();

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('No user with that email');

      const valid = await user.comparePassword(password);
      if (!valid) throw new Error('Incorrect password');

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

      return { token, user };
    },
    addJob: async (_, { title, company, location, description }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const job = new Job({ title, company, location, description });
      await job.save();
      return job;
    },
  },
};

module.exports = resolvers;
