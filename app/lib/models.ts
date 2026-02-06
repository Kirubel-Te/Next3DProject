import modelsData from "../data/models.json"
import type { Model } from "../types"

export async function getAllModels(): Promise<Model[]> {
    return modelsData as Model[]
}