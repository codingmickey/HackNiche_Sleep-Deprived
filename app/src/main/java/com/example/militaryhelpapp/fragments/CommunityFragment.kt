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
import com.example.militaryhelpapp.databinding.FragmentCommunityBinding
import com.example.militaryhelpapp.recycleradapters.RecyclerAdapterSubView

class CommunityFragment : Fragment() {
    private lateinit var binding: FragmentCommunityBinding
    private var subViews: ArrayList<SubViews> = arrayListOf(
        SubViews(R.drawable.baseline_groups_24, "Meet"),
        SubViews(R.drawable.baseline_text_snippet_24, "Blog")
    )

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        binding = FragmentCommunityBinding.inflate(layoutInflater, container, false)

        (requireActivity() as AppCompatActivity).supportActionBar?.title = "Jobs"

        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.recyclerViewCommunity.apply {
            layoutManager = GridLayoutManager(requireContext(), 2)
            adapter = RecyclerAdapterSubView(subViews)
        }
    }
}