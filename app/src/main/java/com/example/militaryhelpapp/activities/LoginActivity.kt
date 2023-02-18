package com.example.militaryhelpapp.activities

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.militaryhelpapp.databinding.ActivityLoginBinding

class LoginActivity : AppCompatActivity() {
    private lateinit var binding: ActivityLoginBinding

    override fun onStart() {
        super.onStart()
//        val user: FirebaseUser? = firebaseAuth.currentUser
//        user?.let {
//            val intent = Intent(this, MainActivity::class.java)
//            intent.flags = Intent.FLAG_ACTIVITY_CLEAR_TASK and Intent.FLAG_ACTIVITY_NEW_TASK
//            startActivity(intent)
//            finish()
//        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityLoginBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.loginButton.setOnClickListener {
            val email = binding.loginEmailText.text.toString()
            val password = binding.loginPasswordText.text.toString().trim()

            if (email.isEmpty()) {
                binding.loginEmailLayout.error = "E-mail Required"
                binding.loginEmailLayout.requestFocus()
                return@setOnClickListener
            }

            if (password.isEmpty()) {
                binding.loginPasswordLayout.error = "Password Required"
                binding.loginPasswordLayout.requestFocus()
                return@setOnClickListener
            }

            singIn(email, password)
        }

        binding.signUpButtonLogin.setOnClickListener {
            val intent = Intent(this, SignUpActivity::class.java)
            intent.flags = Intent.FLAG_ACTIVITY_CLEAR_TASK and Intent.FLAG_ACTIVITY_NEW_TASK
            startActivity(intent)
            finish()
        }

        binding.loginButton.setOnClickListener {
            if(binding.loginEmailText.text!!.isEmpty()) {
                binding.loginEmailLayout.error = "Required*"
                binding.loginEmailLayout.requestFocus()
                return@setOnClickListener
            }
            if(binding.loginPasswordText.text!!.isEmpty()) {
                binding.loginPasswordLayout.error = "Required*"
                binding.loginPasswordLayout.requestFocus()
                return@setOnClickListener
            }

            Toast.makeText(this, "Login Successful!!", Toast.LENGTH_SHORT).show()
            val intent = Intent(this, MainActivity::class.java)
            intent.flags = Intent.FLAG_ACTIVITY_CLEAR_TASK and Intent.FLAG_ACTIVITY_NEW_TASK
            startActivity(intent)
            finish()
        }
    }

    private fun singIn(email: String, password: String) {
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