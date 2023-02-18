package com.example.militaryhelpapp.activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.bumptech.glide.Glide
import com.example.militaryhelpapp.R
import com.example.militaryhelpapp.databinding.ActivityMeetBinding

class MeetActivity : AppCompatActivity() {
    private lateinit var binding: com.example.militaryhelpapp.databinding.ActivityMeetBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMeetBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setSupportActionBar(binding.toolbarMeet)
        supportActionBar?.setHomeButtonEnabled(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        binding.toolbarMeet.setNavigationOnClickListener {
            finish()
        }

        Glide.with(this)
            .load(R.drawable.coming_soon)
            .into(binding.meetImageView)
    }
}