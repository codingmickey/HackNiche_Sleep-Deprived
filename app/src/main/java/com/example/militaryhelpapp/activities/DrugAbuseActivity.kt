package com.example.militaryhelpapp.activities

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.militaryhelpapp.databinding.ActivityDrugAbuseBinding

class DrugAbuseActivity : AppCompatActivity() {
    private lateinit var binding: ActivityDrugAbuseBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityDrugAbuseBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setSupportActionBar(binding.toolbarDrugAbuse)
        supportActionBar?.setHomeButtonEnabled(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.setDisplayShowTitleEnabled(false)
        binding.toolbarDrugAbuse.setNavigationOnClickListener {
            finish()
        }
    }
}