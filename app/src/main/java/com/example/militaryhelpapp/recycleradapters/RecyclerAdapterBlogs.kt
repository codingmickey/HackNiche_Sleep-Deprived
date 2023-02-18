package com.example.militaryhelpapp.recycleradapters

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.example.militaryhelpapp.data.Blog
import com.example.militaryhelpapp.databinding.LayoutBlogBinding

class RecyclerAdapterBlogs(private var data: List<Blog>) :
    RecyclerView.Adapter<RecyclerAdapterBlogs.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding =
            LayoutBlogBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        with(holder) {
            with(data[position]) {
                binding.blogCardAuthor.text = this.author
                binding.blogCardDescription.text = this.message
            }
        }
    }

    override fun getItemCount(): Int {
        return data.size
    }

    inner class ViewHolder(val binding: LayoutBlogBinding) :
        RecyclerView.ViewHolder(binding.root)
}