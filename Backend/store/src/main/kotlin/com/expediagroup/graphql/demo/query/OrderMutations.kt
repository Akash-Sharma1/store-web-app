package com.expediagroup.graphql.demo.query

import com.expediagroup.graphql.spring.operations.Mutation
import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import com.expediagroup.graphql.demo.repository.*

@Component
class OrderMutations(
  private val orderRepository: OrderRepository,
  private val userRepository: UserRepository,
  private val productRepository: ProductRepository,
  private val addressRepository: AddressRepository
): Mutation {

  fun addOrder(userId: Long, productId: Long, amount: Float, addressId: Long): Order{
    val user = userRepository.findById(userId).get()
    val product = productRepository.findById(productId).get()
    val address = addressRepository.findById(addressId).get()
    val order = Order(user = user, amount = amount, product = product, address = address)
    orderRepository.save(order)
    return order
  }

  fun removeOrder(id: Long): Order {
    val order = orderRepository.findById(id).get()
    if (orderRepository.existsById(id)) {
      orderRepository.deleteById(id)
    }
    return order
  }
}