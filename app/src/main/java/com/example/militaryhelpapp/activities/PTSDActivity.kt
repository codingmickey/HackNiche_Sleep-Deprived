package com.example.militaryhelpapp.activities

import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
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
        binding.toolbarPtsd.setNavigationOnClickListener {
            finish()
        }

        binding.ptsdImageFlipperView.startFlipping()

        binding.ptsdQuizButton.setOnClickListener {
            Toast.makeText(this, "Directing to Quiz...", Toast.LENGTH_SHORT).show()
        }
    }
}