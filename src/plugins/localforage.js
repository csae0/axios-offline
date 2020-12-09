import localForage from "localforage"
import { driverWithoutSerialization } from '@aveq-research/localforage-asyncstorage-driver'

export default ({
  storageName = "axios-stack",
  storageDriver = driverWithoutSerialization()
} = {}) => {
  let instance = localForage.createInstance({
    name: storageName,
  })

  instance.setDriver(storageDriver)

  return instance
}
