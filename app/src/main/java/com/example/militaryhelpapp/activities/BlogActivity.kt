package com.example.militaryhelpapp.activities

import android.app.Dialog
import android.os.Bundle
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.militaryhelpapp.R
import com.example.militaryhelpapp.data.Blog
import com.example.militaryhelpapp.databinding.ActivityBlogBinding
import com.example.militaryhelpapp.databinding.LayoutBlogDialogBinding
import com.example.militaryhelpapp.recycleradapters.RecyclerAdapterBlogs

class BlogActivity : AppCompatActivity() {
    private lateinit var binding: ActivityBlogBinding
    private var blogsArray: ArrayList<Blog> = arrayListOf(
        Blog("~ Anonymous", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
        Blog("~ Anonymous", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityBlogBinding.inflate(layoutInflater)
        setContentView(binding.root)

        setSupportActionBar(binding.toolbarBlog)
        supportActionBar?.setHomeButtonEnabled(true)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        binding.toolbarBlog.setNavigationOnClickListener {
            finish()
        }

        binding.recyclerViewBlog.apply {
            layoutManager = LinearLayoutManager(this.context, LinearLayoutManager.VERTICAL, false)
            adapter = RecyclerAdapterBlogs(blogsArray)
        }

        binding.addBlogButton.setOnClickListener {
            val dialog = Dialog(this)
            val dialogBinding = LayoutBlogDialogBinding.inflate(layoutInflater)
            dialog.setContentView(dialogBinding.root)
            dialog.window?.setLayout(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT)
            dialog.setCancelable(false)
            dialog.window?.attributes?.windowAnimations = R.style.animation

            dialogBinding.addBlogButton.setOnClickListener {
                if(dialogBinding.blogDialogCardDescription.text.isEmpty()) {
                    dialogBinding.blogDialogCardDescription.error = "Please enter this filed"
                    dialogBinding.blogDialogCardDescription.requestFocus()
                    return@setOnClickListener
                }
                if(dialogBinding.blogDialogCardAuthor.text.isEmpty()) {
                    dialogBinding.blogDialogCardAuthor.error = "Please enter this filed"
                    dialogBinding.blogDialogCardAuthor.requestFocus()
                    return@setOnClickListener
                }

                blogsArray.add(Blog("~ ${dialogBinding.blogDialogCardAuthor.text.toString()}", dialogBinding.blogDialogCardDescription.text.toString()))
                binding.recyclerViewBlog.adapter = RecyclerAdapterBlogs(blogsArray)
                binding.recyclerViewBlog.adapter!!.notifyDataSetChanged()
                dialog.dismiss()
            }
            dialog.show()
        }

    }
}