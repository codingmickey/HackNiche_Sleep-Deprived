package com.example.militaryhelpapp.activities

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.militaryhelpapp.databinding.ActivitySignUpBinding

class SignUpActivity : AppCompatActivity() {
    private lateinit var binding: ActivitySignUpBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySignUpBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.signUpButton.setOnClickListener {
            val name = binding.signUpNameText.text.toString()
            val address = binding.signUpAddressText.text.toString()
            val email = binding.signUpEmailText.text.toString()
            val password = binding.signUpPasswordText.text.toString().trim()

            if (email.isEmpty()) {
                binding.signUpEmailLayout.error = "E-mail Required"
                binding.signUpEmailLayout.requestFocus()
                return@setOnClickListener
            }

            if (password.isEmpty()) {
                binding.signUpPasswordLayout.error = "Password Required"
                binding.signUpPasswordLayout.requestFocus()
                return@setOnClickListener
            }

            singIn(name, address, email, password)
        }

        binding.loginButtonSignUp.setOnClickListener {
            val intent = Intent(this, LoginActivity::class.java)
            intent.flags = Intent.FLAG_ACTIVITY_CLEAR_TASK and Intent.FLAG_ACTIVITY_NEW_TASK
            startActivity(intent)
            finish()
        }

        binding.signUpButton.setOnClickListener {
            if(binding.signUpNameText.text!!.isEmpty()) {
                binding.signUpNameLayout.error = "Required*"
                binding.signUpNameLayout.requestFocus()
                return@setOnClickListener
            }
            if(binding.signUpAddressLayout.text!!.isEmpty()) {
                binding.signUpAddressLayout.error = "Required*"
                binding.signUpAddressLayout.requestFocus()
                return@setOnClickListener
            }
            if(binding.signUpEmailText.text!!.isEmpty()) {
                binding.signUpEmailLayout.error = "Required*"
                binding.signUpEmailLayout.requestFocus()
                return@setOnClickListener
            }
            if(binding.signUpPasswordText.text!!.isEmpty()) {
                binding.signUpPasswordLayout.error = "Required*"
                binding.signUpPasswordLayout.requestFocus()
                return@setOnClickListener
            }

            Toast.makeText(this, "Sign Up Successful!!", Toast.LENGTH_SHORT).show()
            val intent = Intent(this, MainActivity::class.java)
            intent.flags = Intent.FLAG_ACTIVITY_CLEAR_TASK and Intent.FLAG_ACTIVITY_NEW_TASK
            startActivity(intent)
            finish()
        }
    }

    private fun singIn(name:String, address: String, email: String, password: String) {
        binding.loginProgressBar.visibility = View.VISIBLE

//        firebaseAuth.signInWithEmailAndPassword(email, password).addOnCompleteListener { task ->
//            binding.loginProgressBar.visibility = View.GONE
//
//            if(task.isSuccessful) {
//                val intent = Intent(this, MainActivity::class.java)
//                intent.flags = Intent.FLAG_ACTIVITY_CLEAR_TASK and Intent.FLAG_ACTIVITY_NEW_TASK
//                startActivity(intent)
//                finish()
//                Toast.makeText(this, "Login Successful!!", Toast.LENGTH_SHORT).show()
//            }
//            else {
//                task.exception?.let { showLoginErrorMessage(it) }
//            }
//        }
    }

    private fun showLoginErrorMessage(e: Exception) {
//        try {
//            throw e
//        }
//        catch (e: FirebaseAuthInvalidCredentialsException) {
//            ErrorAlert.showErrorAlert(this, "Login Error", "Incorrect Password")
//        }
//        catch (e: FirebaseAuthInvalidUserException) {
//            ErrorAlert.showErrorAlert(this, "Login Error", "Incorrect E-mail")
//        }
//        catch (e: Exception) {
//            ErrorAlert.showErrorAlert(this,"Login Error", e.message.toString())
//        }
    }
}