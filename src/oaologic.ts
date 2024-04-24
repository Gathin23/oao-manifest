import {
  AICallbackRequest as AICallbackRequestEvent,
  AICallbackResult as AICallbackResultEvent,
} from "../generated/oaologic/oaologic";
import { AICallbackRequest, AICallbackResult } from "../generated/schema";

export function handleAICallbackRequest(event: AICallbackRequestEvent): void {
  let entity = new AICallbackRequest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;
  entity.requestId = event.params.requestId;
  entity.modelId = event.params.modelId;
  entity.input = event.params.input;
  entity.callbackContract = event.params.callbackContract;
  entity.gasLimit = event.params.gasLimit;
  entity.callbackData = event.params.callbackData;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;

  if (event.receipt != null) {
    entity.gasUsed = event.receipt!.gasUsed;
    entity.cumulativeGasUsed = event.receipt!.cumulativeGasUsed;
  }

  entity.save();
}

export function handleAICallbackResult(event: AICallbackResultEvent): void {
  let entity = new AICallbackResult(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.account = event.params.account;
  entity.requestId = event.params.requestId;
  entity.invoker = event.params.invoker;
  entity.output = event.params.output;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.gasPrice = event.transaction.gasPrice;

  if (event.receipt != null) {
    entity.gasUsed = event.receipt!.gasUsed;
    entity.cumulativeGasUsed = event.receipt!.cumulativeGasUsed;
  }
  entity.save();
}
