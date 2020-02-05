import storage from 'good-storage'

const SELLER_KEY = '__seller__'

/**
 * 缓存localStorage对象
 * @param id  要缓存的id
 * @param key 要缓存的key
 * @param value 缓存的默认值
 */
export function saveToLocal(id, key, value) {
  const seller = storage.get(SELLER_KEY, {})
  if (!seller[id]) {
    seller[id] = {}
  }
  seller[id][key] = value
  storage.set(SELLER_KEY, seller)
}

/**
 * 读取localStorage对象
 * @param id  要读取的id
 * @param key 要读取的key
 * @param def 读取不到取默认值
 * @return {any}
 */
export function loadFromLocal(id, key, def) {
  const seller = storage.get(SELLER_KEY, {})
  if (!seller[id]) {
    return def
  }
  return seller[id][key] || def
}
