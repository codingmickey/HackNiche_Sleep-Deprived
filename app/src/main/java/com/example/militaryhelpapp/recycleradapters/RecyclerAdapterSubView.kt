package com.example.militaryhelpapp.recycleradapters

import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.example.militaryhelpapp.activities.*
import com.example.militaryhelpapp.data.SubViews
import com.example.militaryhelpapp.databinding.LayoutCardsBinding

class RecyclerAdapterSubView(private var data: List<SubViews>) :
    RecyclerView.Adapter<RecyclerAdapterSubView.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val binding =
            LayoutCardsBinding.inflate(LayoutInflater.from(parent.context), parent, false)
        return ViewHolder(binding)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        with(holder) {
            with(data[position]) {
                binding.cardName.text = this.text

                Glide.with(itemView)
                    .load(this.image)
                    .into(binding.cardImage)

                binding.subviewCard.setOnClickListener {
                    when (this.text) {
                        "Meet" -> {
                            val intent = Intent(itemView.context, MeetActivity::class.java)
                            itemView.context.startActivity(intent)
                        }
                        "Blog" -> {
                            val intent = Intent(itemView.context, BlogActivity::class.java)
                            itemView.context.startActivity(intent)
                        }
                        "Mental Health" -> {
                            val intent = Intent(itemView.context, MentalHealthActivity::class.java)
                            itemView.context.startActivity(intent)
                        }
                        "PTSD" -> {
                            val intent = Intent(itemView.context, PTSDActivity::class.java)
                            itemView.context.startActivity(intent)
                        }
                        "Drug Abuse" -> {
                            val intent = Intent(itemView.context, DrugAbuseActivity::class.java)
                            itemView.context.startActivity(intent)
                        }
                    }
                }
            }
        }
    }

    override fun getItemCount(): Int {
        return data.size
    }

    inner class ViewHolder(val binding: LayoutCardsBinding) :
        RecyclerView.ViewHolder(binding.root)
}