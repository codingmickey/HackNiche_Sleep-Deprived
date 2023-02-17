package com.example.militaryhelpapp.activities

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.militaryhelpapp.databinding.ActivityBlogBinding

class BlogActivity : AppCompatActivity() {
    private lateinit var binding: ActivityBlogBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityBlogBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setSupportActionBar(binding.toolbarBlog)
        supportActionBar?.setHomeButtonEnabled(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.setDisplayShowTitleEnabled(false)
        binding.toolbarBlog.setNavigationOnClickListener {
            finish()
        }
    }
}