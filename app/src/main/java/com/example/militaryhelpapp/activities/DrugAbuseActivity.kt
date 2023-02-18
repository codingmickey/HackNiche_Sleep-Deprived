package com.example.militaryhelpapp.activities

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.bumptech.glide.Glide
import com.example.militaryhelpapp.R
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
        binding.toolbarDrugAbuse.setNavigationOnClickListener {
            finish()
        }

        Glide.with(this)
            .load(R.drawable.coming_soon)
            .into(binding.drugAbuseImageView)
    }
}