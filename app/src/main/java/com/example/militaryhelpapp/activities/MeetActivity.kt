package com.example.militaryhelpapp.activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.militaryhelpapp.databinding.ActivityDrugAbuseBinding
import com.example.militaryhelpapp.databinding.ActivityMeetBinding

class MeetActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMeetBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMeetBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setSupportActionBar(binding.toolbarMeet)
        supportActionBar?.setHomeButtonEnabled(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.setDisplayShowTitleEnabled(false)
        binding.toolbarMeet.setNavigationOnClickListener {
            finish()
        }
    }
}