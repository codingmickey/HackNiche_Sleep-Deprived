package com.example.militaryhelpapp.activities

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.militaryhelpapp.R
import com.example.militaryhelpapp.data.SubViews
import com.example.militaryhelpapp.databinding.ActivitySlideBinding
import com.example.militaryhelpapp.recycleradapters.RecyclerAdapterSlide

class SlideActivity : AppCompatActivity() {
    private lateinit var binding: ActivitySlideBinding
    private val arraySlide: ArrayList<SubViews> = arrayListOf(
        SubViews(R.drawable.job_explore, "Job"),
        SubViews(R.drawable.support, "Support"),
        SubViews(R.drawable.community_2, "Community"),
        SubViews(R.drawable.pension, "Pension"),
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySlideBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.carouselRecyclerView.apply {
            layoutManager = getCarouselLayoutManager()
            adapter = RecyclerAdapterSlide(arraySlide)
            setIsScrollingEnabled(true)
            setFlat(true)
        }

        binding.slideContinueButton.setOnClickListener {
            val intent = Intent(this, LoginActivity::class.java)
            intent.flags = Intent.FLAG_ACTIVITY_CLEAR_TASK and Intent.FLAG_ACTIVITY_NEW_TASK
            startActivity(intent)
            finish()
        }
    }
}