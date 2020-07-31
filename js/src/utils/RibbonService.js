class RibbonService {
  setRibbonWrapperRef(ref) {
    this._ref = ref;
  }

  show({ type, message, dismissable = false, timeout = 0, onRetryPress }) {
    return this._ref.show({ type, message, dismissable, timeout, onRetryPress });
  }

  dismiss(uid) {
    this._ref.dismiss(uid);
  }
}

export default new RibbonService;
