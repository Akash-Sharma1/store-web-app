package com.expediagroup.graphql.demo.models

import javax.persistence.*
import javax.validation.constraints.NotBlank

@Entity @Table(name = "users")
data class User(
  @get: NotBlank
  val name: String,

  @get: NotBlank
  val email: String,

  @get: NotBlank
  var password: String
) {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  var id: Long? = null

  @OneToMany(mappedBy = "user", cascade = arrayOf(CascadeType.ALL), fetch = FetchType.LAZY)
  var orders: List<Order> = listOf()

  var phone: String? = null
}
