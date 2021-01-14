package com.expediagroup.graphql.demo.models

import javax.persistence.*
import javax.validation.constraints.NotBlank
import javax.validation.constraints.NotNull

@Entity
data class CustomProduct(
  @OneToOne()
  @JoinColumn(name = "user_id")
  var user: User,

  @get: NotNull
  var max_price: Float,
  @get: NotNull
  var min_price: Float,

  @get: NotNull
  var max_days: Int,
  @get: NotNull
  var min_days: Int,

  @get: NotBlank
  override var description: String,

  @get: NotNull
  var size: Float = 0f
) : Product(){
  init{
    name = "CustomProduct"
  }
  var req_status: ReqStatus = ReqStatus.REVIEW_PENDING
  var req_text: String? = ""
}


enum class ReqStatus {
  REVIEW_PENDING, IN_REVIEW, ANSWER
}

