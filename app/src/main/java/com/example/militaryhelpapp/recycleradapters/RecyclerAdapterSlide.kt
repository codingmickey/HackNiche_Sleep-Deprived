package com.example.militaryhelpapp.recycleradapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.militaryhelpapp.data.SubViews
import com.example.militaryhelpapp.databinding.LayoutSlideBinding

class RecyclerAdapterSlide(private var data: List<SubViews>) :
    RecyclerView.Adapter<RecyclerAdapterSlide.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding =
            LayoutSlideBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        with(holder) {
            with(data[position]) {
                Glide.with(itemView.context)
                    .load(this.image)
                    .into(binding.slideImage)

                binding.slideText.text = this.text
            }
        }
    }

    override fun getItemCount(): Int {
        return data.size
    }

    inner class ViewHolder(val binding: LayoutSlideBinding) :
        RecyclerView.ViewHolder(binding.root)
}