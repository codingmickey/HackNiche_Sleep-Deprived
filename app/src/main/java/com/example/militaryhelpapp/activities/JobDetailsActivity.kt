package com.example.militaryhelpapp.activities

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.militaryhelpapp.databinding.ActivityJobDetailsBinding

class JobDetailsActivity : AppCompatActivity() {
    private lateinit var binding: ActivityJobDetailsBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityJobDetailsBinding.inflate(layoutInflater)
        setContentView(binding.root)

        
    }
}