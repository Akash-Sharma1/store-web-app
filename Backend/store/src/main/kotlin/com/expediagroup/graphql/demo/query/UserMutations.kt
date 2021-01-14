package com.expediagroup.graphql.demo.query

import com.expediagroup.graphql.spring.operations.Mutation
import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import com.expediagroup.graphql.demo.repository.*

@Component
class UserMutations(
  private val userRepository: UserRepository,
  private val addressRepository: AddressRepository
): Mutation {

  fun addUser(name: String, email: String, password: String, phone: String? = null): User{
    val user = User(name = name, email = email, password = password)
    user.phone = phone
    userRepository.save(user)
    return user
  }

  fun updateUser(id: Long, phone: String? = null, password: String? = null) :User{
    var user = userRepository.findById(id).get()
    user.phone = phone ?: user.phone
    user.password = password ?: user.password
    userRepository.save(user)
    return user
  }

  fun removeUser(id: Long): User {
    val user = userRepository.findById(id).get()
    if (userRepository.existsById(id)) {
      userRepository.deleteById(id)
    }
    return user
  }
}