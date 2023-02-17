import mongoose from 'mongoose';

const jobSchema = mongoose.Schema(
  {
    org: {
      name: {
        type: String
      },
      desc: {
        type: String
      },
      logo: {
        type: String
      },
      website: {
        type: String
      },
      social: {
        type: String
      },
      docs: {
        type: String
      }
    },
    job: {
      type: {
        type: String
      },
      profile: {
        type: String
      },
      skills: {
        type: String
      },
      location: {
        type: String
      },
      city: {
        type: String
      },
      openings: {
        type: String
      },
      duration: {
        type: String
      },
      salary: {
        type: Number
      }
    }
  },
  { timestamps: true }
);

const Job = mongoose.model('Jobs', jobSchema);

export default Job;
