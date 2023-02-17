package com.example.militaryhelpapp.activities

import android.content.Intent
import android.net.Uri
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.example.militaryhelpapp.databinding.ActivityJobDetailsBinding

class JobDetailsActivity : AppCompatActivity() {
    private lateinit var binding: ActivityJobDetailsBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityJobDetailsBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setSupportActionBar(binding.toolbarJobDetails)
        supportActionBar?.setHomeButtonEnabled(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.setDisplayShowTitleEnabled(false)
        binding.toolbarJobDetails.setNavigationOnClickListener {
            finish()
        }

        val jobName = intent.getStringExtra("job_name")
        val companyName = intent.getStringExtra("company_name")
        val aboutCompany = intent.getStringExtra("about_company")
        val companyLink = intent.getStringExtra("link")
        val location = intent.getStringExtra("location")
        val category = intent.getStringExtra("category")
        val start = intent.getStringExtra("job_start")
        val duration = intent.getStringExtra("job_duration")
        val stipend = intent.getStringExtra("job_stipend")
        val postTime = intent.getStringExtra("job_post_time")
        val skills = intent.getStringExtra("skills")
        val openings = intent.getStringExtra("job_openings")

        binding.jobDetailsText.text = "${jobName} Job at ${companyName}"
        binding.jobDetailsName.text = jobName
        binding.jobDetailsCompanyName.text = companyName
        binding.jobDetailsCompanyLocation.text = location
        binding.jobDetailsCategory.text = category
        binding.jobDetailsStart.text = start
        binding.jobDetailsDuration.text = duration
        binding.jobDetailsStipend.text = stipend
        binding.jobDetailsPostTime.text = postTime
        binding.jobDetailsAboutCompanyText.text = "About ${companyName}"
        binding.jobDetailsAboutCompanyLink.text = companyLink
        binding.jobDetailsAboutCompanyDescription.text = aboutCompany
        binding.jobDetailsSkillsRequired.text = skills
        binding.jobDetailsSalary.text = stipend
        binding.jobDetailsOpenings.text = openings

        binding.jobDetailsAboutCompanyLink.setOnClickListener {
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(companyLink))
            startActivity(intent)
        }

        binding.jobDetailsApplyButton.setOnClickListener {
            Toast.makeText(this, "Successfully Applied!!", Toast.LENGTH_SHORT).show()
        }
    }
}