package com.example.militaryhelpapp.activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.militaryhelpapp.databinding.ActivityDrugAbuseBinding
import com.example.militaryhelpapp.databinding.ActivityPtsdactivityBinding

class PTSDActivity : AppCompatActivity() {
    private lateinit var binding: ActivityPtsdactivityBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityPtsdactivityBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setSupportActionBar(binding.toolbarPtsd)
        supportActionBar?.setHomeButtonEnabled(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.setDisplayShowTitleEnabled(false)
        binding.toolbarPtsd.setNavigationOnClickListener {
            finish()
        }
    }
}