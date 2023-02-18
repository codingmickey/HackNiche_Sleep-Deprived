package com.example.militaryhelpapp.activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AlertDialog
import com.example.militaryhelpapp.R
import com.example.militaryhelpapp.databinding.ActivityDonationBinding

class DonationActivity : AppCompatActivity() {
    private lateinit var binding: ActivityDonationBinding
    private var donateAmount: Int = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityDonationBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setSupportActionBar(binding.toolbarDonation)
        supportActionBar?.setHomeButtonEnabled(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        binding.toolbarDonation.setNavigationOnClickListener {
            finish()
        }

        binding.donationStep1Button.setOnClickListener {
            if (binding.donationRadioGroup.checkedRadioButtonId == -1) {
                Toast.makeText(this, "Please select an amount.", Toast.LENGTH_SHORT).show()
                binding.donationRadioGroup.requestFocus()
                return@setOnClickListener
            }

            when (binding.donationRadioGroup.checkedRadioButtonId) {
                R.id.donate_200 -> donateAmount = 200
                R.id.donate_1000 -> donateAmount = 1000
                R.id.donate_2400 -> donateAmount = 2400
                R.id.donate_5000 -> donateAmount = 5000
            }

            binding.donationStep1Button.visibility = View.GONE
            binding.donationContactText.visibility = View.VISIBLE
            binding.donationSendToPhoneText.visibility = View.VISIBLE
            binding.donationNameLayout.visibility = View.VISIBLE
            binding.donationAddressLayout.visibility = View.VISIBLE
            binding.donationEmailLayout.visibility = View.VISIBLE
            binding.donationPhoneLayout.visibility = View.VISIBLE
            binding.donationStep2Button.visibility = View.VISIBLE
        }

        binding.donationStep2Button.setOnClickListener {
            if(binding.donationNameText.text!!.isEmpty()) {
                binding.donationNameLayout.error = "Please fill this."
                binding.donationNameLayout.requestFocus()
                return@setOnClickListener
            }
            if(binding.donationAddressText.text!!.isEmpty()) {
                binding.donationAddressLayout.error = "Please fill this."
                binding.donationAddressLayout.requestFocus()
                return@setOnClickListener
            }
            if(binding.donationEmailText.text!!.isEmpty()) {
                binding.donationEmailLayout.error = "Please fill this."
                binding.donationEmailLayout.requestFocus()
                return@setOnClickListener
            }
            if(binding.donationPhoneText.text!!.isEmpty()) {
                binding.donationPhoneLayout.error = "Please fill this."
                binding.donationPhoneLayout.requestFocus()
                return@setOnClickListener
            }


            val builder = AlertDialog.Builder(this)
            builder.setTitle("Confirm Payment")
            builder.setMessage("Would you like to continue with the payment?")

            builder.setPositiveButton("Yes") { _, _ ->
                Toast.makeText(
                    applicationContext,
                    "Thank you for supporting us with $donateAmount", Toast.LENGTH_SHORT
                ).show()
                finish()
            }

            builder.setNegativeButton("No") { _, _ ->
                Toast.makeText(
                    applicationContext,
                    "Please consider donating some other time.", Toast.LENGTH_SHORT
                ).show()
                finish()
            }
            builder.show()
        }
    }
}