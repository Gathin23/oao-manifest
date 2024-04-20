import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AICallbackRequest,
  AICallbackResult
} from "../generated/oaologic/oaologic"

export function createAICallbackRequestEvent(
  account: Address,
  requestId: BigInt,
  modelId: BigInt,
  input: Bytes,
  callbackContract: Address,
  gasLimit: BigInt,
  callbackData: Bytes
): AICallbackRequest {
  let aiCallbackRequestEvent = changetype<AICallbackRequest>(newMockEvent())

  aiCallbackRequestEvent.parameters = new Array()

  aiCallbackRequestEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  aiCallbackRequestEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  aiCallbackRequestEvent.parameters.push(
    new ethereum.EventParam(
      "modelId",
      ethereum.Value.fromUnsignedBigInt(modelId)
    )
  )
  aiCallbackRequestEvent.parameters.push(
    new ethereum.EventParam("input", ethereum.Value.fromBytes(input))
  )
  aiCallbackRequestEvent.parameters.push(
    new ethereum.EventParam(
      "callbackContract",
      ethereum.Value.fromAddress(callbackContract)
    )
  )
  aiCallbackRequestEvent.parameters.push(
    new ethereum.EventParam(
      "gasLimit",
      ethereum.Value.fromUnsignedBigInt(gasLimit)
    )
  )
  aiCallbackRequestEvent.parameters.push(
    new ethereum.EventParam(
      "callbackData",
      ethereum.Value.fromBytes(callbackData)
    )
  )

  return aiCallbackRequestEvent
}

export function createAICallbackResultEvent(
  account: Address,
  requestId: BigInt,
  invoker: Address,
  output: Bytes
): AICallbackResult {
  let aiCallbackResultEvent = changetype<AICallbackResult>(newMockEvent())

  aiCallbackResultEvent.parameters = new Array()

  aiCallbackResultEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  aiCallbackResultEvent.parameters.push(
    new ethereum.EventParam(
      "requestId",
      ethereum.Value.fromUnsignedBigInt(requestId)
    )
  )
  aiCallbackResultEvent.parameters.push(
    new ethereum.EventParam("invoker", ethereum.Value.fromAddress(invoker))
  )
  aiCallbackResultEvent.parameters.push(
    new ethereum.EventParam("output", ethereum.Value.fromBytes(output))
  )

  return aiCallbackResultEvent
}
