package com.expediagroup.graphql.demo.repository

import org.springframework.stereotype.Component
import com.expediagroup.graphql.demo.models.*
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface  OrderRepository: JpaRepository<Order, Long>{
  fun countByStatus(status: OrderStatus) : Int
  fun countByStatusIsNot(status: OrderStatus) : Int
  fun findAllByStatusIs(status: OrderStatus) : List<Order>
  fun findAllByStatusIsNot(status: OrderStatus) : List<Order>
}
