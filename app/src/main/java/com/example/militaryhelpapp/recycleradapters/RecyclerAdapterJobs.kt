package com.example.militaryhelpapp.recycleradapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
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
                binding.companyName.text = this.companyName
                binding.companyLocation.text = this.location
                binding.jobCategory.text = this.category
                binding.jobStart.text = this.start
                binding.jobDuration.text = this.duration
                binding.jobStipend.text = this.stipend
                binding.jobPostTime.text = this.postTime

                binding.jobsViewDetail.setOnClickListener {

                }

                binding.jobApplyNowButton.setOnClickListener {

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