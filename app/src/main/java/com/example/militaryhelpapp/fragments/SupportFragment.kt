package com.example.militaryhelpapp.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.GridLayoutManager
import com.example.militaryhelpapp.R
import com.example.militaryhelpapp.data.SubViews
import com.example.militaryhelpapp.databinding.FragmentSupportBinding
import com.example.militaryhelpapp.recycleradapters.RecyclerAdapterSubView

class SupportFragment : Fragment() {
    private lateinit var binding: FragmentSupportBinding
    private var subViews: ArrayList<SubViews> = arrayListOf(
        SubViews(R.drawable.mental, "Mental Health"),
        SubViews(R.drawable.trauma, "PTSD"),
        SubViews(R.drawable.drug, "Drug Abuse"),
        SubViews(R.drawable.donate, "Donation"),
        SubViews(R.drawable.house_hunt, "House Hunt")
    )

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        binding = FragmentSupportBinding.inflate(layoutInflater, container, false)

        (requireActivity() as AppCompatActivity).supportActionBar?.title = "Support"

        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.recyclerViewSupport.apply {
            layoutManager = GridLayoutManager(requireContext(), 2)
            adapter = RecyclerAdapterSubView(subViews)
        }
    }
}