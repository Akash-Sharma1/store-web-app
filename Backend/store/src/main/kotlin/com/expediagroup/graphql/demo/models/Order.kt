package com.expediagroup.graphql.demo.models
  
import javax.persistence.*
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

@Entity @Table(name = "orders")
data class Order(
  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "user_id")
  var user: User,

  @OneToOne()
  @JoinColumn(name = "address_id")
  var address: Address,

  @ManyToOne(fetch = FetchType.EAGER)
  @JoinColumn(name = "product_id")
  var product: Product,

  @get: NotNull
  val amount: Float
) {
  var status: Status = Status.ACCEPTED

  var statusDescription : String? = null

  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  var id: Long? = null
}

enum class Status {
  ACCEPTED, SHIPPING, INTRANSIT, COMPLETED
}
