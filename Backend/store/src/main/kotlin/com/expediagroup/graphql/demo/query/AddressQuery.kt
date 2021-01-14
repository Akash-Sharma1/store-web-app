package com.expediagroup.graphql.demo.query

import com.expediagroup.graphql.spring.operations.Query
import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import com.expediagroup.graphql.demo.repository.*

@Component
class AddressQuery(
  private val addressRepository: AddressRepository,
  private val userRepository: UserRepository
) : Query {

  fun addresses(userId: Long) : List<Address>{
    val user = userRepository.findById(userId).get()
    return addressRepository.findAllByUser(user)
  }

  fun addressById(id: Long) = addressRepository.findById(id).get()
}
