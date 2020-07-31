import { channel } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';

const effectsChannel = new channel();

export default function* effectsChannelConsumer() {
  yield takeEvery(effectsChannel, worker);
}

function* worker(effect) {
  yield effect;
}

export const defer = effectsChannel.put;
