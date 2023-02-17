package com.example.militaryhelpapp.activities

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.militaryhelpapp.databinding.ActivityMentalHealthBinding

class MentalHealthActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMentalHealthBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMentalHealthBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setSupportActionBar(binding.toolbarMentalHealth)
        supportActionBar?.setHomeButtonEnabled(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.setDisplayShowTitleEnabled(false)
        binding.toolbarMentalHealth.setNavigationOnClickListener {
            finish()
        }
    }
}