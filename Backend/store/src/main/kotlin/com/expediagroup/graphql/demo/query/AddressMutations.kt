package com.expediagroup.graphql.demo.query

import com.expediagroup.graphql.spring.operations.Mutation
import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import com.expediagroup.graphql.demo.repository.*

@Component
class AddressMutation(
  private val addressRepository: AddressRepository,
  private val userRepository: UserRepository,
  private val orderRepository: OrderRepository
) : Mutation {

  fun addAddress(
    userId: Long, city: String, state: String, country: String, hno: String, area: String
  ): Address{
    val user = userRepository.findById(userId).get()
    val address = Address(
      city = city, state = state, country = country, hno = hno, area = area, user = user
    )
    addressRepository.save(address)
    return address;
  }

  fun removeaddress(id: Long) : Address{
    val address = addressRepository.findById(id).get()
    if (addressRepository.existsById(id)) {
      addressRepository.deleteById(id)
    }
    addressRepository.save(address)
    return address
  }
}
