import mongoose from 'mongoose';

const DonationSchema = mongoose.Schema(
  {
    amount: {
      type: Number
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  { timestamps: true }
);

const Donation = mongoose.model('Donations', DonationSchema);

export default Donation;
