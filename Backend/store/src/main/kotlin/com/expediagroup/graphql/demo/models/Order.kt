package com.expediagroup.graphql.demo.models
  
import javax.persistence.*
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

@Entity @Table(name = "orders")
data class Order(
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id")
  var user: User,

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "product_id")
  var product: Product,

  @get: NotNull
  val amount: Float
) {
  var status: OrderStatus = OrderStatus.PENDING

  var statusDescription : String? = null

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  var id: Long? = null
}

enum class OrderStatus {
  PENDING, ORDERED, ORDER_ACCEPTED, INPROGRESS, COMPLETED
}
