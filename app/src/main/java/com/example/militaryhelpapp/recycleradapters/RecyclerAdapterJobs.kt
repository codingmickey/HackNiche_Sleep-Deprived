package com.example.militaryhelpapp.recycleradapters

import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import com.example.militaryhelpapp.activities.JobDetailsActivity
import com.example.militaryhelpapp.data.Jobs
import com.example.militaryhelpapp.databinding.LayoutJobsBinding

class RecyclerAdapterJobs(private var data: List<Jobs>) :
    RecyclerView.Adapter<RecyclerAdapterJobs.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding =
            LayoutJobsBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        with(holder) {
            with(data[position]) {
                binding.jobName.text = this.jobName
                binding.jobCompanyName.text = this.companyName
                binding.jobCompanyLocation.text = this.location
                binding.jobCategory.text = this.category
                binding.jobStart.text = this.start
                binding.jobDuration.text = this.duration
                binding.jobStipend.text = this.stipend
                binding.jobPostTime.text = this.postTime

                binding.jobsViewDetail.setOnClickListener {
                    val intent = Intent(itemView.context, JobDetailsActivity::class.java)
                    intent.putExtra("job_name", this.jobName)
                    intent.putExtra("company_name", this.companyName)
                    intent.putExtra("about_company", this.aboutCompany)
                    intent.putExtra("link", this.companyLink)
                    intent.putExtra("location", this.location)
                    intent.putExtra("category", this.category)
                    intent.putExtra("job_start", this.start)
                    intent.putExtra("job_duration", this.duration)
                    intent.putExtra("job_stipend", this.stipend)
                    intent.putExtra("job_post_time", this.postTime)
                    intent.putExtra("skills", this.skills)
                    intent.putExtra("job_openings", this.openings)
                    itemView.context.startActivity(intent)
                }

                binding.jobApplyNowButton.setOnClickListener {
                    Toast.makeText(itemView.context, "Successfully Applied!!", Toast.LENGTH_SHORT).show()
                }
            }
        }
    }

    override fun getItemCount(): Int {
        return data.size
    }

    inner class ViewHolder(val binding: LayoutJobsBinding) :
        RecyclerView.ViewHolder(binding.root)
}