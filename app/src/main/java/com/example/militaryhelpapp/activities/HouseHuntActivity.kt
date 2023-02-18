package com.example.militaryhelpapp.activities

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.militaryhelpapp.R
import com.example.militaryhelpapp.data.House
import com.example.militaryhelpapp.databinding.ActivityHouseHuntBinding
import com.example.militaryhelpapp.recycleradapters.RecyclerAdapterHouse

class HouseHuntActivity : AppCompatActivity() {
    private lateinit var binding: ActivityHouseHuntBinding
    private var houseArray: ArrayList<House> = arrayListOf(
        House(R.drawable.house, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas", "Borivali"),
        House(R.drawable.house, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas", "Kandivali"),
        House(R.drawable.house, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas", "Malad"),
        House(R.drawable.house, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas", "Vashi"),
        House(R.drawable.house, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas", "Thane"),
        House(R.drawable.house, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla posuere leo at nunc tristique egestas", "Panvel")
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityHouseHuntBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setSupportActionBar(binding.toolbarHouse)
        supportActionBar?.setHomeButtonEnabled(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        binding.toolbarHouse.setNavigationOnClickListener {
            finish()
        }

        binding.recyclerViewHouse.apply {
            layoutManager = LinearLayoutManager(this.context, LinearLayoutManager.VERTICAL, false)
            adapter = RecyclerAdapterHouse(houseArray)
        }
    }
}