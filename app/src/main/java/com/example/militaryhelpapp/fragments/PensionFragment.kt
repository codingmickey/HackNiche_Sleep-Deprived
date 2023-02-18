package com.example.militaryhelpapp.fragments

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.AdapterView
import android.widget.ArrayAdapter
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.example.militaryhelpapp.databinding.FragmentPensionBinding

class PensionFragment : Fragment() {
    private lateinit var binding: FragmentPensionBinding
    private var posts: ArrayList<String> = arrayListOf(
        "Field-Marshal",
        "General",
        "Lieutenant General",
        "Major General",
        "Brigadier",
        "Major"
    )

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        binding = FragmentPensionBinding.inflate(layoutInflater, container, false)

        (requireActivity() as AppCompatActivity).supportActionBar?.title = "Jobs"

        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        var post: String? = null
        val adapter: ArrayAdapter<String> = ArrayAdapter<String>(requireContext(), android.R.layout.simple_spinner_item, posts)
        binding.pensionPostSpinner.adapter = adapter

        binding.pensionPostSpinner.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onItemSelected(p0: AdapterView<*>?, p1: View?, p2: Int, p3: Long) {
                post = binding.pensionPostSpinner.selectedItem.toString()
            }

            override fun onNothingSelected(p0: AdapterView<*>?) {
                TODO("Not yet implemented")
            }
        }

        binding.pensionCalculateButton.setOnClickListener {
            if(binding.pensionQualifyingServiceYears.text!!.isEmpty()) {
                binding.pensionQualifyingServiceYearsLayout.error = "Please enter this field"
                binding.pensionQualifyingServiceYearsLayout.requestFocus()
                return@setOnClickListener
            }

            if(binding.pensionEmoluments.text!!.isEmpty()) {
                binding.pensionEmolumentsLayout.error = "Please enter this field"
                binding.pensionEmolumentsLayout.requestFocus()
                return@setOnClickListener
            }

            val year = Integer.parseInt(binding.pensionQualifyingServiceYears.text.toString())
            val emolument = Integer.parseInt(binding.pensionEmoluments.text.toString())

            if(year < 10) {
                binding.pensionAmount.text = "Sorry, You are not eligible for pension."
            }
            else if((year > 10) && (year <= 20)) {
                binding.pensionAmount.text = "Rs. ${(emolument / 2) * (year / 20)}"
            }
            else {
                binding.pensionAmount.text = "Rs. ${(emolument / 2)}"
            }
        }
    }
}