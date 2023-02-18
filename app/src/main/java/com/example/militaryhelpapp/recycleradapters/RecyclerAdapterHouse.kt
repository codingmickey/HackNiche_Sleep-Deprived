package com.example.militaryhelpapp.recycleradapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.militaryhelpapp.data.House
import com.example.militaryhelpapp.databinding.LayoutHouseBinding

class RecyclerAdapterHouse(private var data: List<House>) :
    RecyclerView.Adapter<RecyclerAdapterHouse.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding =
            LayoutHouseBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        with(holder) {
            with(data[position]) {
                Glide.with(itemView.context)
                    .load(this.image)
                    .into(binding.houseCardImage)

                binding.houseCardDescription.text = this.description
                binding.houseCardCity.text = this.city
            }
        }
    }

    override fun getItemCount(): Int {
        return data.size
    }

    inner class ViewHolder(val binding: LayoutHouseBinding) :
        RecyclerView.ViewHolder(binding.root)
}