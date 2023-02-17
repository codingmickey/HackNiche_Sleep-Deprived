package com.example.militaryhelpapp.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.militaryhelpapp.data.Jobs
import com.example.militaryhelpapp.databinding.FragmentJobsBinding
import com.example.militaryhelpapp.recycleradapters.RecyclerAdapterJobs

class JobsFragment : Fragment() {
    private lateinit var binding: FragmentJobsBinding
    private var jobsArray: ArrayList<Jobs> = arrayListOf(
        Jobs("Marketing", "SkillLynk", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", null, "Mumbai", "Work From Home", "Starts Immediately", "3 months", "2000 / month", "1 week ago", "Java, Python", 100),
        Jobs("Marketing", "SkillLynk", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", null, "Mumbai", "Work From Home", "Starts Immediately", "3 months", "2000 / month", "1 week ago", "Java, Python", 100),
        Jobs("Marketing", "SkillLynk", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", null, "Mumbai", "Work From Home", "Starts Immediately", "3 months", "2000 / month", "1 week ago", "Java, Python", 100),
        Jobs("Marketing", "SkillLynk", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", null, "Mumbai", "Work From Home", "Starts Immediately", "3 months", "2000 / month", "1 week ago", "Java, Python", 100),
        Jobs("Marketing", "SkillLynk", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", null, "Mumbai", "Work From Home", "Starts Immediately", "3 months", "2000 / month", "1 week ago", "Java, Python", 100),
    )

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        binding = FragmentJobsBinding.inflate(layoutInflater, container, false)

        (requireActivity() as AppCompatActivity).supportActionBar?.title = "Jobs"

        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.recyclerViewJobs.apply {
            layoutManager = LinearLayoutManager(view.context, LinearLayoutManager.VERTICAL, false)
            adapter = RecyclerAdapterJobs(jobsArray)
        }

    }
}