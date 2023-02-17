package com.example.militaryhelpapp.objects
import com.example.militaryhelpapp.apis.RetrofitApi
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object ApiConstants {

    private const val baseUrl = "https://therecipepool.pythonanywhere.com/"

    val rf = Retrofit.Builder()
        .baseUrl(baseUrl)
        .addConverterFactory(GsonConverterFactory.create())
        .build()
        .create(RetrofitApi::class.java)
}