package com.expediagroup.graphql.demo.query

import com.expediagroup.graphql.spring.operations.Mutation
import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import com.expediagroup.graphql.demo.repository.*

@Component
class OrderMutations(
  private val orderRepository: OrderRepository,
  private val userRepository: UserRepository,
  private val productRepository: ProductRepository
): Mutation {

  fun addOrder(productId: Long): Order{
    val user = userRepository.findById(1).get()
    val product = productRepository.findById(productId).get()
    var amount = product.price ?: 0f
    val order = Order(user = user, amount = amount, product = product)
    orderRepository.save(order)
    return order
  }

  fun addToCart(productId: Long): Order{
    val order = addOrder(productId)
    order.status = OrderStatus.PENDING
    orderRepository.save(order)
    return order
  }

  fun moveToOrdersfromCart(id: Long): Order{
    val order = orderRepository.findById(id).get()
    order.status = OrderStatus.ORDERED
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