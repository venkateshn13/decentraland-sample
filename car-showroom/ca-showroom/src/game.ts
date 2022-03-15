import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../a72de884-e275-490d-b1bb-7f7eaca4777f/src/item"
import Script2 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script3 from "../431f971e-4eee-4691-aa03-d541f0ac3c76/src/item"
import Script4 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script5 from "../1746d432-ba19-4b2e-819f-d16cf5a64236/src/item"
import Script6 from "../ed36149f-76c5-45c4-a678-d4b31c4ed9ca/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const bermudaGrass = new Entity('bermudaGrass')
engine.addEntity(bermudaGrass)
bermudaGrass.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
bermudaGrass.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass.addComponentOrReplace(transform2)

const bermudaGrass2 = new Entity('bermudaGrass2')
engine.addEntity(bermudaGrass2)
bermudaGrass2.setParent(_scene)
bermudaGrass2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass2.addComponentOrReplace(transform3)

const bermudaGrass3 = new Entity('bermudaGrass3')
engine.addEntity(bermudaGrass3)
bermudaGrass3.setParent(_scene)
bermudaGrass3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(40, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass3.addComponentOrReplace(transform4)

const bermudaGrass4 = new Entity('bermudaGrass4')
engine.addEntity(bermudaGrass4)
bermudaGrass4.setParent(_scene)
bermudaGrass4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(56, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass4.addComponentOrReplace(transform5)

const bermudaGrass5 = new Entity('bermudaGrass5')
engine.addEntity(bermudaGrass5)
bermudaGrass5.setParent(_scene)
bermudaGrass5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass5.addComponentOrReplace(transform6)

const bermudaGrass6 = new Entity('bermudaGrass6')
engine.addEntity(bermudaGrass6)
bermudaGrass6.setParent(_scene)
bermudaGrass6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass6.addComponentOrReplace(transform7)

const bermudaGrass7 = new Entity('bermudaGrass7')
engine.addEntity(bermudaGrass7)
bermudaGrass7.setParent(_scene)
bermudaGrass7.addComponentOrReplace(gltfShape)
const transform8 = new Transform({
  position: new Vector3(40, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass7.addComponentOrReplace(transform8)

const bermudaGrass8 = new Entity('bermudaGrass8')
engine.addEntity(bermudaGrass8)
bermudaGrass8.setParent(_scene)
bermudaGrass8.addComponentOrReplace(gltfShape)
const transform9 = new Transform({
  position: new Vector3(56, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass8.addComponentOrReplace(transform9)

const bermudaGrass9 = new Entity('bermudaGrass9')
engine.addEntity(bermudaGrass9)
bermudaGrass9.setParent(_scene)
bermudaGrass9.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass9.addComponentOrReplace(transform10)

const bermudaGrass10 = new Entity('bermudaGrass10')
engine.addEntity(bermudaGrass10)
bermudaGrass10.setParent(_scene)
bermudaGrass10.addComponentOrReplace(gltfShape)
const transform11 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass10.addComponentOrReplace(transform11)

const bermudaGrass11 = new Entity('bermudaGrass11')
engine.addEntity(bermudaGrass11)
bermudaGrass11.setParent(_scene)
bermudaGrass11.addComponentOrReplace(gltfShape)
const transform12 = new Transform({
  position: new Vector3(40, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass11.addComponentOrReplace(transform12)

const bermudaGrass12 = new Entity('bermudaGrass12')
engine.addEntity(bermudaGrass12)
bermudaGrass12.setParent(_scene)
bermudaGrass12.addComponentOrReplace(gltfShape)
const transform13 = new Transform({
  position: new Vector3(56, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass12.addComponentOrReplace(transform13)

const bermudaGrass13 = new Entity('bermudaGrass13')
engine.addEntity(bermudaGrass13)
bermudaGrass13.setParent(_scene)
bermudaGrass13.addComponentOrReplace(gltfShape)
const transform14 = new Transform({
  position: new Vector3(8, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass13.addComponentOrReplace(transform14)

const bermudaGrass14 = new Entity('bermudaGrass14')
engine.addEntity(bermudaGrass14)
bermudaGrass14.setParent(_scene)
bermudaGrass14.addComponentOrReplace(gltfShape)
const transform15 = new Transform({
  position: new Vector3(24, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass14.addComponentOrReplace(transform15)

const bermudaGrass15 = new Entity('bermudaGrass15')
engine.addEntity(bermudaGrass15)
bermudaGrass15.setParent(_scene)
bermudaGrass15.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(40, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass15.addComponentOrReplace(transform16)

const bermudaGrass16 = new Entity('bermudaGrass16')
engine.addEntity(bermudaGrass16)
bermudaGrass16.setParent(_scene)
bermudaGrass16.addComponentOrReplace(gltfShape)
const transform17 = new Transform({
  position: new Vector3(56, 0, 56),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass16.addComponentOrReplace(transform17)

const bermudaGrass17 = new Entity('bermudaGrass17')
engine.addEntity(bermudaGrass17)
bermudaGrass17.setParent(_scene)
bermudaGrass17.addComponentOrReplace(gltfShape)
const transform18 = new Transform({
  position: new Vector3(8, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass17.addComponentOrReplace(transform18)

const bermudaGrass18 = new Entity('bermudaGrass18')
engine.addEntity(bermudaGrass18)
bermudaGrass18.setParent(_scene)
bermudaGrass18.addComponentOrReplace(gltfShape)
const transform19 = new Transform({
  position: new Vector3(24, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass18.addComponentOrReplace(transform19)

const bermudaGrass19 = new Entity('bermudaGrass19')
engine.addEntity(bermudaGrass19)
bermudaGrass19.setParent(_scene)
bermudaGrass19.addComponentOrReplace(gltfShape)
const transform20 = new Transform({
  position: new Vector3(40, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass19.addComponentOrReplace(transform20)

const bermudaGrass20 = new Entity('bermudaGrass20')
engine.addEntity(bermudaGrass20)
bermudaGrass20.setParent(_scene)
bermudaGrass20.addComponentOrReplace(gltfShape)
const transform21 = new Transform({
  position: new Vector3(56, 0, 72),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bermudaGrass20.addComponentOrReplace(transform21)

const wallPlainDarkGrey = new Entity('wallPlainDarkGrey')
engine.addEntity(wallPlainDarkGrey)
wallPlainDarkGrey.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(0, 0, 3.5),
  rotation: new Quaternion(0.5, -0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(-13.749998092651367, -6.735001564025879, 8.490005493164062)
})
wallPlainDarkGrey.addComponentOrReplace(transform22)
const gltfShape2 = new GLTFShape("9f69ad55-310d-4182-bd28-89983721f963/PlainDarkGreyWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallPlainDarkGrey.addComponentOrReplace(gltfShape2)

const wallPlainDarkGrey2 = new Entity('wallPlainDarkGrey2')
engine.addEntity(wallPlainDarkGrey2)
wallPlainDarkGrey2.setParent(_scene)
wallPlainDarkGrey2.addComponentOrReplace(gltfShape2)
const transform23 = new Transform({
  position: new Vector3(0, 0, 26),
  rotation: new Quaternion(0.5, -0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(-13.749998092651367, -6.735001564025879, 8.490005493164062)
})
wallPlainDarkGrey2.addComponentOrReplace(transform23)

const wallPlainDarkGrey3 = new Entity('wallPlainDarkGrey3')
engine.addEntity(wallPlainDarkGrey3)
wallPlainDarkGrey3.setParent(_scene)
wallPlainDarkGrey3.addComponentOrReplace(gltfShape2)
const transform24 = new Transform({
  position: new Vector3(21.5, 0, 26),
  rotation: new Quaternion(0.5, -0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(-13.749998092651367, -6.735001564025879, 8.490005493164062)
})
wallPlainDarkGrey3.addComponentOrReplace(transform24)

const wallPlainDarkGrey4 = new Entity('wallPlainDarkGrey4')
engine.addEntity(wallPlainDarkGrey4)
wallPlainDarkGrey4.setParent(_scene)
wallPlainDarkGrey4.addComponentOrReplace(gltfShape2)
const transform25 = new Transform({
  position: new Vector3(21.5, 0, 26),
  rotation: new Quaternion(0.5, -0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(-13.749998092651367, -6.735001564025879, 8.490005493164062)
})
wallPlainDarkGrey4.addComponentOrReplace(transform25)

const concreteWall2 = new Entity('concreteWall2')
engine.addEntity(concreteWall2)
concreteWall2.setParent(_scene)
const gltfShape3 = new GLTFShape("53aa3052-ccd7-4a05-be3f-f840acbff99e/Concrete_Wall.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
concreteWall2.addComponentOrReplace(gltfShape3)
const transform26 = new Transform({
  position: new Vector3(49.5, 0.5, 3.5),
  rotation: new Quaternion(-8.429370268459024e-8, -0.70710688829422, -0.7071067690849304, 1.5715585029076745e-14),
  scale: new Vector3(1.5000137090682983, 3.000014543533325, 1.0100047588348389)
})
concreteWall2.addComponentOrReplace(transform26)

const concreteWall = new Entity('concreteWall')
engine.addEntity(concreteWall)
concreteWall.setParent(_scene)
concreteWall.addComponentOrReplace(gltfShape3)
const transform27 = new Transform({
  position: new Vector3(50, 1, 3.5),
  rotation: new Quaternion(-8.429370268459024e-8, -0.70710688829422, -0.7071067690849304, 1.5715585029076745e-14),
  scale: new Vector3(1.0000087022781372, 3.000013828277588, 1.0100045204162598)
})
concreteWall.addComponentOrReplace(transform27)

const concreteWall3 = new Entity('concreteWall3')
engine.addEntity(concreteWall3)
concreteWall3.setParent(_scene)
concreteWall3.addComponentOrReplace(gltfShape3)
const transform28 = new Transform({
  position: new Vector3(49.5, 1, 3.5),
  rotation: new Quaternion(-8.429370268459024e-8, -0.70710688829422, -0.7071067690849304, 1.5715585029076745e-14),
  scale: new Vector3(1.0000096559524536, 2.000009775161743, 1.010004997253418)
})
concreteWall3.addComponentOrReplace(transform28)

const concreteWall4 = new Entity('concreteWall4')
engine.addEntity(concreteWall4)
concreteWall4.setParent(_scene)
concreteWall4.addComponentOrReplace(gltfShape3)
const transform29 = new Transform({
  position: new Vector3(49.5, 1.5, 3.5),
  rotation: new Quaternion(-8.429370268459024e-8, -0.70710688829422, -0.7071067690849304, 1.5715585029076745e-14),
  scale: new Vector3(1.00001060962677, 3.000016689300537, 1.0100054740905762)
})
concreteWall4.addComponentOrReplace(transform29)

const concreteWall5 = new Entity('concreteWall5')
engine.addEntity(concreteWall5)
concreteWall5.setParent(_scene)
concreteWall5.addComponentOrReplace(gltfShape3)
const transform30 = new Transform({
  position: new Vector3(49.5, 1.5, 3.5),
  rotation: new Quaternion(-8.429370268459024e-8, -0.70710688829422, -0.7071067690849304, 1.5715585029076745e-14),
  scale: new Vector3(1.0000110864639282, 2.0000112056732178, 1.0100057125091553)
})
concreteWall5.addComponentOrReplace(transform30)

const concreteWall6 = new Entity('concreteWall6')
engine.addEntity(concreteWall6)
concreteWall6.setParent(_scene)
concreteWall6.addComponentOrReplace(gltfShape3)
const transform31 = new Transform({
  position: new Vector3(49, 2, 3.5),
  rotation: new Quaternion(-8.429370268459024e-8, -0.70710688829422, -0.7071067690849304, 1.5715585029076745e-14),
  scale: new Vector3(1.0000134706497192, 3.000020980834961, 1.0100069046020508)
})
concreteWall6.addComponentOrReplace(transform31)

const concreteWall8 = new Entity('concreteWall8')
engine.addEntity(concreteWall8)
concreteWall8.setParent(_scene)
concreteWall8.addComponentOrReplace(gltfShape3)
const transform32 = new Transform({
  position: new Vector3(49.5, 2.5, 3.5),
  rotation: new Quaternion(-8.429370268459024e-8, -0.70710688829422, -0.7071067690849304, 1.5715585029076745e-14),
  scale: new Vector3(0.5000076293945312, 3.000023365020752, 1.0100078582763672)
})
concreteWall8.addComponentOrReplace(transform32)

const wallPlainDarkGrey5 = new Entity('wallPlainDarkGrey5')
engine.addEntity(wallPlainDarkGrey5)
wallPlainDarkGrey5.setParent(_scene)
wallPlainDarkGrey5.addComponentOrReplace(gltfShape2)
const transform33 = new Transform({
  position: new Vector3(22.5, 0, 3.5),
  rotation: new Quaternion(0.5, -0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(-3.437499523162842, -6.735001564025879, 8.490005493164062)
})
wallPlainDarkGrey5.addComponentOrReplace(transform33)

const wallPlainGrey = new Entity('wallPlainGrey')
engine.addEntity(wallPlainGrey)
wallPlainGrey.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(48.5, 2.5, 3),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(22.5, 12.000127792358398, 1.2500007152557373)
})
wallPlainGrey.addComponentOrReplace(transform34)
const gltfShape4 = new GLTFShape("2030fe67-5e37-4aec-a76f-b35fd286e9ac/PlainGreyWall.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
wallPlainGrey.addComponentOrReplace(gltfShape4)

const wallPlainGrey2 = new Entity('wallPlainGrey2')
engine.addEntity(wallPlainGrey2)
wallPlainGrey2.setParent(_scene)
wallPlainGrey2.addComponentOrReplace(gltfShape4)
const transform35 = new Transform({
  position: new Vector3(45, 2.5, 3),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(22.5, 12.000080108642578, 1.2500030994415283)
})
wallPlainGrey2.addComponentOrReplace(transform35)

const wallPlainGrey3 = new Entity('wallPlainGrey3')
engine.addEntity(wallPlainGrey3)
wallPlainGrey3.setParent(_scene)
wallPlainGrey3.addComponentOrReplace(gltfShape4)
const transform36 = new Transform({
  position: new Vector3(48, 2.5, 3.5),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(22.5, 12.000065803527832, 0.025000078603625298)
})
wallPlainGrey3.addComponentOrReplace(transform36)

const wallPlainWhite = new Entity('wallPlainWhite')
engine.addEntity(wallPlainWhite)
wallPlainWhite.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(0, 3, 53.5),
  rotation: new Quaternion(-2.523097274051379e-15, -0.7071067690849304, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(15.9375, 3, 1)
})
wallPlainWhite.addComponentOrReplace(transform37)
const gltfShape5 = new GLTFShape("45eb9e1a-2eca-4b6f-a5c4-b0278dc7e635/PlainWhiteWall.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
wallPlainWhite.addComponentOrReplace(gltfShape5)

const concreteWall9 = new Entity('concreteWall9')
engine.addEntity(concreteWall9)
concreteWall9.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(0, 0, 80),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(9.492207527160645, 3, 1.000002384185791)
})
concreteWall9.addComponentOrReplace(transform38)
concreteWall9.addComponentOrReplace(gltfShape3)

const concreteWall10 = new Entity('concreteWall10')
engine.addEntity(concreteWall10)
concreteWall10.setParent(_scene)
concreteWall10.addComponentOrReplace(gltfShape3)
const transform39 = new Transform({
  position: new Vector3(0, 0, 72.5),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(9.49221134185791, 3, 1.0000028610229492)
})
concreteWall10.addComponentOrReplace(transform39)

const wallPlainWhite4 = new Entity('wallPlainWhite4')
engine.addEntity(wallPlainWhite4)
wallPlainWhite4.setParent(_scene)
wallPlainWhite4.addComponentOrReplace(gltfShape5)
const transform40 = new Transform({
  position: new Vector3(18, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9, 3, 0.9999998807907104)
})
wallPlainWhite4.addComponentOrReplace(transform40)

const wallPlainWhite3 = new Entity('wallPlainWhite3')
engine.addEntity(wallPlainWhite3)
wallPlainWhite3.setParent(_scene)
wallPlainWhite3.addComponentOrReplace(gltfShape5)
const transform41 = new Transform({
  position: new Vector3(18, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9, 3, 0.9999998807907104)
})
wallPlainWhite3.addComponentOrReplace(transform41)

const glassWall = new Entity('glassWall')
engine.addEntity(glassWall)
glassWall.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(96, 3.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glassWall.addComponentOrReplace(transform42)
const gltfShape6 = new GLTFShape("04569848-3026-4093-bc15-52e328451eb0/scene.gltf")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
glassWall.addComponentOrReplace(gltfShape6)

const glassWall2 = new Entity('glassWall2')
engine.addEntity(glassWall2)
glassWall2.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(45, 0, 34.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 0.9999989867210388)
})
glassWall2.addComponentOrReplace(transform43)
glassWall2.addComponentOrReplace(gltfShape6)

const glassWall3 = new Entity('glassWall3')
engine.addEntity(glassWall3)
glassWall3.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(96, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(15.5, 192.5, 7.500003814697266)
})
glassWall3.addComponentOrReplace(transform44)
glassWall3.addComponentOrReplace(gltfShape6)

const wallPlainGrey6 = new Entity('wallPlainGrey6')
engine.addEntity(wallPlainGrey6)
wallPlainGrey6.setParent(_scene)
wallPlainGrey6.addComponentOrReplace(gltfShape4)
const transform45 = new Transform({
  position: new Vector3(45, 2.5, 6),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(22.5, 12.000099182128906, 1.250002145767212)
})
wallPlainGrey6.addComponentOrReplace(transform45)

const wallPlainGrey4 = new Entity('wallPlainGrey4')
engine.addEntity(wallPlainGrey4)
wallPlainGrey4.setParent(_scene)
wallPlainGrey4.addComponentOrReplace(gltfShape4)
const transform46 = new Transform({
  position: new Vector3(48.5, 2.5, 6.5),
  rotation: new Quaternion(0.7071068286895752, 1.5394153601527394e-15, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(22.5, 12.000139236450195, 1.2500007152557373)
})
wallPlainGrey4.addComponentOrReplace(transform46)

const wallPlainWhite2 = new Entity('wallPlainWhite2')
engine.addEntity(wallPlainWhite2)
wallPlainWhite2.setParent(_scene)
wallPlainWhite2.addComponentOrReplace(gltfShape5)
const transform47 = new Transform({
  position: new Vector3(0, 3, 35.5),
  rotation: new Quaternion(-2.523097274051379e-15, -0.7071067690849304, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(15.9375, 3, 1)
})
wallPlainWhite2.addComponentOrReplace(transform47)

const wallPlainPeach = new Entity('wallPlainPeach')
engine.addEntity(wallPlainPeach)
wallPlainPeach.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(18, 3, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.1358983963727951, 2, 15.18750286102295)
})
wallPlainPeach.addComponentOrReplace(transform48)
const gltfShape7 = new GLTFShape("b645a8f2-b7b7-4bbf-86e2-29d73765ea41/PlainPeachWall.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
wallPlainPeach.addComponentOrReplace(gltfShape7)

const wallPlainPeach2 = new Entity('wallPlainPeach2')
engine.addEntity(wallPlainPeach2)
wallPlainPeach2.setParent(_scene)
wallPlainPeach2.addComponentOrReplace(gltfShape7)
const transform49 = new Transform({
  position: new Vector3(18, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.1358983963727951, 2, 10.125001907348633)
})
wallPlainPeach2.addComponentOrReplace(transform49)

const wallPlainPeach3 = new Entity('wallPlainPeach3')
engine.addEntity(wallPlainPeach3)
wallPlainPeach3.setParent(_scene)
wallPlainPeach3.addComponentOrReplace(gltfShape7)
const transform50 = new Transform({
  position: new Vector3(18, 3, 39.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.1358983963727951, 2, 10.125001907348633)
})
wallPlainPeach3.addComponentOrReplace(transform50)

const wallPlainPeach4 = new Entity('wallPlainPeach4')
engine.addEntity(wallPlainPeach4)
wallPlainPeach4.setParent(_scene)
wallPlainPeach4.addComponentOrReplace(gltfShape7)
const transform51 = new Transform({
  position: new Vector3(18, 3, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.1358983963727951, 2, 10.125001907348633)
})
wallPlainPeach4.addComponentOrReplace(transform51)

const wallPlainPeach5 = new Entity('wallPlainPeach5')
engine.addEntity(wallPlainPeach5)
wallPlainPeach5.setParent(_scene)
wallPlainPeach5.addComponentOrReplace(gltfShape7)
const transform52 = new Transform({
  position: new Vector3(18, 9, 51),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.1358983963727951, 0.5199999809265137, 144.28128051757812)
})
wallPlainPeach5.addComponentOrReplace(transform52)

const concreteWall12 = new Entity('concreteWall12')
engine.addEntity(concreteWall12)
concreteWall12.setParent(_scene)
concreteWall12.addComponentOrReplace(gltfShape3)
const transform53 = new Transform({
  position: new Vector3(0, 3, 72.5),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(9.492215156555176, 3, 1.0000033378601074)
})
concreteWall12.addComponentOrReplace(transform53)

const concreteWall7 = new Entity('concreteWall7')
engine.addEntity(concreteWall7)
concreteWall7.setParent(_scene)
concreteWall7.addComponentOrReplace(gltfShape3)
const transform54 = new Transform({
  position: new Vector3(0, 3, 79.5),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(9.492218971252441, 3, 1.0000038146972656)
})
concreteWall7.addComponentOrReplace(transform54)

const wallPlainDarkGrey7 = new Entity('wallPlainDarkGrey7')
engine.addEntity(wallPlainDarkGrey7)
wallPlainDarkGrey7.setParent(_scene)
wallPlainDarkGrey7.addComponentOrReplace(gltfShape2)
const transform55 = new Transform({
  position: new Vector3(21.5, 0, 3.5),
  rotation: new Quaternion(0.5, -0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(-13.749998092651367, -6.735001564025879, 8.490005493164062)
})
wallPlainDarkGrey7.addComponentOrReplace(transform55)

const wallPlainDarkGrey8 = new Entity('wallPlainDarkGrey8')
engine.addEntity(wallPlainDarkGrey8)
wallPlainDarkGrey8.setParent(_scene)
wallPlainDarkGrey8.addComponentOrReplace(gltfShape2)
const transform56 = new Transform({
  position: new Vector3(0, 0, 26),
  rotation: new Quaternion(0.5, -0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(-13.749998092651367, -6.735001564025879, 8.490005493164062)
})
wallPlainDarkGrey8.addComponentOrReplace(transform56)

const wallPlainDarkGrey9 = new Entity('wallPlainDarkGrey9')
engine.addEntity(wallPlainDarkGrey9)
wallPlainDarkGrey9.setParent(_scene)
wallPlainDarkGrey9.addComponentOrReplace(gltfShape2)
const transform57 = new Transform({
  position: new Vector3(0, 0, 3.5),
  rotation: new Quaternion(0.5, -0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(-13.749998092651367, -6.735001564025879, 8.490005493164062)
})
wallPlainDarkGrey9.addComponentOrReplace(transform57)

const invisibleRamp = new Entity('invisibleRamp')
engine.addEntity(invisibleRamp)
invisibleRamp.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(52, 0, 9.5),
  rotation: new Quaternion(1.4786793920654618e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(11.25, 3, 4)
})
invisibleRamp.addComponentOrReplace(transform58)

const concreteWall13 = new Entity('concreteWall13')
engine.addEntity(concreteWall13)
concreteWall13.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(48.5, 13, 54),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(17, 0.5, 2)
})
concreteWall13.addComponentOrReplace(transform59)
concreteWall13.addComponentOrReplace(gltfShape3)

const concreteWall14 = new Entity('concreteWall14')
engine.addEntity(concreteWall14)
concreteWall14.setParent(_scene)
concreteWall14.addComponentOrReplace(gltfShape3)
const transform60 = new Transform({
  position: new Vector3(34.5, 13, 54),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(17, 0.5, 1)
})
concreteWall14.addComponentOrReplace(transform60)

const concreteWall15 = new Entity('concreteWall15')
engine.addEntity(concreteWall15)
concreteWall15.setParent(_scene)
concreteWall15.addComponentOrReplace(gltfShape3)
const transform61 = new Transform({
  position: new Vector3(34, 13, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(17, 0.5, 1)
})
concreteWall15.addComponentOrReplace(transform61)

const concreteWall16 = new Entity('concreteWall16')
engine.addEntity(concreteWall16)
concreteWall16.setParent(_scene)
concreteWall16.addComponentOrReplace(gltfShape3)
const transform62 = new Transform({
  position: new Vector3(48, 13, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(17, 0.5, 1)
})
concreteWall16.addComponentOrReplace(transform62)

const concreteWall19 = new Entity('concreteWall19')
engine.addEntity(concreteWall19)
concreteWall19.setParent(_scene)
concreteWall19.addComponentOrReplace(gltfShape3)
const transform63 = new Transform({
  position: new Vector3(0.5, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.25499892234802246, 1.8824999332427979, 0.9999997615814209)
})
concreteWall19.addComponentOrReplace(transform63)

const concreteWall20 = new Entity('concreteWall20')
engine.addEntity(concreteWall20)
concreteWall20.setParent(_scene)
concreteWall20.addComponentOrReplace(gltfShape3)
const transform64 = new Transform({
  position: new Vector3(48, 12, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(17, 0.7549999952316284, 1.5)
})
concreteWall20.addComponentOrReplace(transform64)

const concreteWall21 = new Entity('concreteWall21')
engine.addEntity(concreteWall21)
concreteWall21.setParent(_scene)
concreteWall21.addComponentOrReplace(gltfShape3)
const transform65 = new Transform({
  position: new Vector3(48, 3.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(24, 1.125, 1.9999998807907104)
})
concreteWall21.addComponentOrReplace(transform65)

const concreteWall11 = new Entity('concreteWall11')
engine.addEntity(concreteWall11)
concreteWall11.setParent(_scene)
concreteWall11.addComponentOrReplace(gltfShape3)
const transform66 = new Transform({
  position: new Vector3(48, 0, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(24, 1.125, 1.9999998807907104)
})
concreteWall11.addComponentOrReplace(transform66)

const concreteWall18 = new Entity('concreteWall18')
engine.addEntity(concreteWall18)
concreteWall18.setParent(_scene)
concreteWall18.addComponentOrReplace(gltfShape3)
const transform67 = new Transform({
  position: new Vector3(34, 12, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(17, 0.7549999952316284, 1.5)
})
concreteWall18.addComponentOrReplace(transform67)

const concreteWall22 = new Entity('concreteWall22')
engine.addEntity(concreteWall22)
concreteWall22.setParent(_scene)
concreteWall22.addComponentOrReplace(gltfShape3)
const transform68 = new Transform({
  position: new Vector3(4.500000476837158, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.25499892234802246, 1.8824999332427979, 0.9999997615814209)
})
concreteWall22.addComponentOrReplace(transform68)

const concreteWall23 = new Entity('concreteWall23')
engine.addEntity(concreteWall23)
concreteWall23.setParent(_scene)
concreteWall23.addComponentOrReplace(gltfShape3)
const transform69 = new Transform({
  position: new Vector3(8.500000953674316, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099978446960449, 1.8824999332427979, 0.9999997615814209)
})
concreteWall23.addComponentOrReplace(transform69)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(4, 8, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999998807907104, 1, 0.9999998211860657)
})
wallPlainGlass.addComponentOrReplace(transform70)
const gltfShape8 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
wallPlainGlass.addComponentOrReplace(gltfShape8)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
wallPlainGlass2.addComponentOrReplace(gltfShape8)
const transform71 = new Transform({
  position: new Vector3(7.5, 8, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999998807907104, 1, 0.9999998211860657)
})
wallPlainGlass2.addComponentOrReplace(transform71)

const concreteWall17 = new Entity('concreteWall17')
engine.addEntity(concreteWall17)
concreteWall17.setParent(_scene)
concreteWall17.addComponentOrReplace(gltfShape3)
const transform72 = new Transform({
  position: new Vector3(16.000001907348633, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099978446960449, 1.8824999332427979, 0.9999997615814209)
})
concreteWall17.addComponentOrReplace(transform72)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape8)
const transform73 = new Transform({
  position: new Vector3(15, 8, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999998807907104, 1, 0.9999998211860657)
})
wallPlainGlass3.addComponentOrReplace(transform73)

const concreteWall24 = new Entity('concreteWall24')
engine.addEntity(concreteWall24)
concreteWall24.setParent(_scene)
concreteWall24.addComponentOrReplace(gltfShape3)
const transform74 = new Transform({
  position: new Vector3(12.000000953674316, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.25499892234802246, 1.8824999332427979, 0.9999997615814209)
})
concreteWall24.addComponentOrReplace(transform74)

const wallPlainGlass4 = new Entity('wallPlainGlass4')
engine.addEntity(wallPlainGlass4)
wallPlainGlass4.setParent(_scene)
wallPlainGlass4.addComponentOrReplace(gltfShape8)
const transform75 = new Transform({
  position: new Vector3(11.5, 8, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999998807907104, 1, 0.9999998211860657)
})
wallPlainGlass4.addComponentOrReplace(transform75)

const concreteWall25 = new Entity('concreteWall25')
engine.addEntity(concreteWall25)
concreteWall25.setParent(_scene)
concreteWall25.addComponentOrReplace(gltfShape3)
const transform76 = new Transform({
  position: new Vector3(23.500003814697266, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099978446960449, 1.8824999332427979, 0.9999997615814209)
})
concreteWall25.addComponentOrReplace(transform76)

const wallPlainGlass5 = new Entity('wallPlainGlass5')
engine.addEntity(wallPlainGlass5)
wallPlainGlass5.setParent(_scene)
wallPlainGlass5.addComponentOrReplace(gltfShape8)
const transform77 = new Transform({
  position: new Vector3(22.5, 8, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999998807907104, 1, 0.9999998211860657)
})
wallPlainGlass5.addComponentOrReplace(transform77)

const concreteWall26 = new Entity('concreteWall26')
engine.addEntity(concreteWall26)
concreteWall26.setParent(_scene)
concreteWall26.addComponentOrReplace(gltfShape3)
const transform78 = new Transform({
  position: new Vector3(19.500001907348633, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.25499892234802246, 1.8824999332427979, 0.9999997615814209)
})
concreteWall26.addComponentOrReplace(transform78)

const wallPlainGlass6 = new Entity('wallPlainGlass6')
engine.addEntity(wallPlainGlass6)
wallPlainGlass6.setParent(_scene)
wallPlainGlass6.addComponentOrReplace(gltfShape8)
const transform79 = new Transform({
  position: new Vector3(19, 8, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999998807907104, 1, 0.9999998211860657)
})
wallPlainGlass6.addComponentOrReplace(transform79)

const wallPlainGlass7 = new Entity('wallPlainGlass7')
engine.addEntity(wallPlainGlass7)
wallPlainGlass7.setParent(_scene)
wallPlainGlass7.addComponentOrReplace(gltfShape8)
const transform80 = new Transform({
  position: new Vector3(30, 8, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999998807907104, 1, 0.9999998211860657)
})
wallPlainGlass7.addComponentOrReplace(transform80)

const concreteWall27 = new Entity('concreteWall27')
engine.addEntity(concreteWall27)
concreteWall27.setParent(_scene)
concreteWall27.addComponentOrReplace(gltfShape3)
const transform81 = new Transform({
  position: new Vector3(27.000001907348633, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.25499892234802246, 1.8824999332427979, 0.9999997615814209)
})
concreteWall27.addComponentOrReplace(transform81)

const concreteWall28 = new Entity('concreteWall28')
engine.addEntity(concreteWall28)
concreteWall28.setParent(_scene)
concreteWall28.addComponentOrReplace(gltfShape3)
const transform82 = new Transform({
  position: new Vector3(31.000003814697266, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099978446960449, 1.8824999332427979, 0.9999997615814209)
})
concreteWall28.addComponentOrReplace(transform82)

const wallPlainGlass8 = new Entity('wallPlainGlass8')
engine.addEntity(wallPlainGlass8)
wallPlainGlass8.setParent(_scene)
wallPlainGlass8.addComponentOrReplace(gltfShape8)
const transform83 = new Transform({
  position: new Vector3(26.5, 8, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999998807907104, 1, 0.9999998211860657)
})
wallPlainGlass8.addComponentOrReplace(transform83)

const wallPlainGlass9 = new Entity('wallPlainGlass9')
engine.addEntity(wallPlainGlass9)
wallPlainGlass9.setParent(_scene)
wallPlainGlass9.addComponentOrReplace(gltfShape8)
const transform84 = new Transform({
  position: new Vector3(37.5, 8, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999998807907104, 1, 0.9999998211860657)
})
wallPlainGlass9.addComponentOrReplace(transform84)

const concreteWall29 = new Entity('concreteWall29')
engine.addEntity(concreteWall29)
concreteWall29.setParent(_scene)
concreteWall29.addComponentOrReplace(gltfShape3)
const transform85 = new Transform({
  position: new Vector3(34.500003814697266, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.25499892234802246, 1.8824999332427979, 0.9999997615814209)
})
concreteWall29.addComponentOrReplace(transform85)

const concreteWall30 = new Entity('concreteWall30')
engine.addEntity(concreteWall30)
concreteWall30.setParent(_scene)
concreteWall30.addComponentOrReplace(gltfShape3)
const transform86 = new Transform({
  position: new Vector3(38.50000762939453, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.5099978446960449, 1.8824999332427979, 0.9999997615814209)
})
concreteWall30.addComponentOrReplace(transform86)

const wallPlainGlass10 = new Entity('wallPlainGlass10')
engine.addEntity(wallPlainGlass10)
wallPlainGlass10.setParent(_scene)
wallPlainGlass10.addComponentOrReplace(gltfShape8)
const transform87 = new Transform({
  position: new Vector3(34, 8, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999998807907104, 1, 0.9999998211860657)
})
wallPlainGlass10.addComponentOrReplace(transform87)

const concreteWall31 = new Entity('concreteWall31')
engine.addEntity(concreteWall31)
concreteWall31.setParent(_scene)
concreteWall31.addComponentOrReplace(gltfShape3)
const transform88 = new Transform({
  position: new Vector3(42.000003814697266, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.25499892234802246, 1.8824999332427979, 0.9999997615814209)
})
concreteWall31.addComponentOrReplace(transform88)

const concreteWall32 = new Entity('concreteWall32')
engine.addEntity(concreteWall32)
concreteWall32.setParent(_scene)
concreteWall32.addComponentOrReplace(gltfShape3)
const transform89 = new Transform({
  position: new Vector3(48.00000762939453, 5.5, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2749946117401123, 1.8824999332427979, 0.9999997615814209)
})
concreteWall32.addComponentOrReplace(transform89)

const wallPlainGlass12 = new Entity('wallPlainGlass12')
engine.addEntity(wallPlainGlass12)
wallPlainGlass12.setParent(_scene)
wallPlainGlass12.addComponentOrReplace(gltfShape8)
const transform90 = new Transform({
  position: new Vector3(41.5, 8, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999998807907104, 1, 0.9999998211860657)
})
wallPlainGlass12.addComponentOrReplace(transform90)

const wallPlainGlass13 = new Entity('wallPlainGlass13')
engine.addEntity(wallPlainGlass13)
wallPlainGlass13.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(20, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass13.addComponentOrReplace(transform91)
wallPlainGlass13.addComponentOrReplace(gltfShape8)

const wallPlainWhite5 = new Entity('wallPlainWhite5')
engine.addEntity(wallPlainWhite5)
wallPlainWhite5.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(20, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite5.addComponentOrReplace(transform92)
wallPlainWhite5.addComponentOrReplace(gltfShape5)

const wallPlainWhite6 = new Entity('wallPlainWhite6')
engine.addEntity(wallPlainWhite6)
wallPlainWhite6.setParent(_scene)
wallPlainWhite6.addComponentOrReplace(gltfShape5)
const transform93 = new Transform({
  position: new Vector3(18, 9, 4),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.02999984659254551, 7.500004768371582, 0.9999997615814209)
})
wallPlainWhite6.addComponentOrReplace(transform93)

const wallPlainGlass14 = new Entity('wallPlainGlass14')
engine.addEntity(wallPlainGlass14)
wallPlainGlass14.setParent(_scene)
wallPlainGlass14.addComponentOrReplace(gltfShape8)
const transform94 = new Transform({
  position: new Vector3(20, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass14.addComponentOrReplace(transform94)

const wallPlainGlass17 = new Entity('wallPlainGlass17')
engine.addEntity(wallPlainGlass17)
wallPlainGlass17.setParent(_scene)
wallPlainGlass17.addComponentOrReplace(gltfShape8)
const transform95 = new Transform({
  position: new Vector3(20, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass17.addComponentOrReplace(transform95)

const wallPlainWhite7 = new Entity('wallPlainWhite7')
engine.addEntity(wallPlainWhite7)
wallPlainWhite7.setParent(_scene)
wallPlainWhite7.addComponentOrReplace(gltfShape5)
const transform96 = new Transform({
  position: new Vector3(20, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite7.addComponentOrReplace(transform96)

const wallPlainGlass18 = new Entity('wallPlainGlass18')
engine.addEntity(wallPlainGlass18)
wallPlainGlass18.setParent(_scene)
wallPlainGlass18.addComponentOrReplace(gltfShape8)
const transform97 = new Transform({
  position: new Vector3(20, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass18.addComponentOrReplace(transform97)

const wallPlainGlass15 = new Entity('wallPlainGlass15')
engine.addEntity(wallPlainGlass15)
wallPlainGlass15.setParent(_scene)
wallPlainGlass15.addComponentOrReplace(gltfShape8)
const transform98 = new Transform({
  position: new Vector3(22, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass15.addComponentOrReplace(transform98)

const wallPlainGlass16 = new Entity('wallPlainGlass16')
engine.addEntity(wallPlainGlass16)
wallPlainGlass16.setParent(_scene)
wallPlainGlass16.addComponentOrReplace(gltfShape8)
const transform99 = new Transform({
  position: new Vector3(22, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass16.addComponentOrReplace(transform99)

const wallPlainWhite8 = new Entity('wallPlainWhite8')
engine.addEntity(wallPlainWhite8)
wallPlainWhite8.setParent(_scene)
wallPlainWhite8.addComponentOrReplace(gltfShape5)
const transform100 = new Transform({
  position: new Vector3(22, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite8.addComponentOrReplace(transform100)

const wallPlainGlass19 = new Entity('wallPlainGlass19')
engine.addEntity(wallPlainGlass19)
wallPlainGlass19.setParent(_scene)
wallPlainGlass19.addComponentOrReplace(gltfShape8)
const transform101 = new Transform({
  position: new Vector3(24, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass19.addComponentOrReplace(transform101)

const wallPlainGlass20 = new Entity('wallPlainGlass20')
engine.addEntity(wallPlainGlass20)
wallPlainGlass20.setParent(_scene)
wallPlainGlass20.addComponentOrReplace(gltfShape8)
const transform102 = new Transform({
  position: new Vector3(24, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass20.addComponentOrReplace(transform102)

const wallPlainWhite9 = new Entity('wallPlainWhite9')
engine.addEntity(wallPlainWhite9)
wallPlainWhite9.setParent(_scene)
wallPlainWhite9.addComponentOrReplace(gltfShape5)
const transform103 = new Transform({
  position: new Vector3(24, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite9.addComponentOrReplace(transform103)

const wallPlainGlass21 = new Entity('wallPlainGlass21')
engine.addEntity(wallPlainGlass21)
wallPlainGlass21.setParent(_scene)
wallPlainGlass21.addComponentOrReplace(gltfShape8)
const transform104 = new Transform({
  position: new Vector3(26, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass21.addComponentOrReplace(transform104)

const wallPlainGlass22 = new Entity('wallPlainGlass22')
engine.addEntity(wallPlainGlass22)
wallPlainGlass22.setParent(_scene)
wallPlainGlass22.addComponentOrReplace(gltfShape8)
const transform105 = new Transform({
  position: new Vector3(26, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass22.addComponentOrReplace(transform105)

const wallPlainWhite10 = new Entity('wallPlainWhite10')
engine.addEntity(wallPlainWhite10)
wallPlainWhite10.setParent(_scene)
wallPlainWhite10.addComponentOrReplace(gltfShape5)
const transform106 = new Transform({
  position: new Vector3(26, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite10.addComponentOrReplace(transform106)

const wallPlainGlass23 = new Entity('wallPlainGlass23')
engine.addEntity(wallPlainGlass23)
wallPlainGlass23.setParent(_scene)
wallPlainGlass23.addComponentOrReplace(gltfShape8)
const transform107 = new Transform({
  position: new Vector3(28, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass23.addComponentOrReplace(transform107)

const wallPlainGlass24 = new Entity('wallPlainGlass24')
engine.addEntity(wallPlainGlass24)
wallPlainGlass24.setParent(_scene)
wallPlainGlass24.addComponentOrReplace(gltfShape8)
const transform108 = new Transform({
  position: new Vector3(28, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass24.addComponentOrReplace(transform108)

const wallPlainWhite11 = new Entity('wallPlainWhite11')
engine.addEntity(wallPlainWhite11)
wallPlainWhite11.setParent(_scene)
wallPlainWhite11.addComponentOrReplace(gltfShape5)
const transform109 = new Transform({
  position: new Vector3(28, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite11.addComponentOrReplace(transform109)

const wallPlainGlass25 = new Entity('wallPlainGlass25')
engine.addEntity(wallPlainGlass25)
wallPlainGlass25.setParent(_scene)
wallPlainGlass25.addComponentOrReplace(gltfShape8)
const transform110 = new Transform({
  position: new Vector3(30, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass25.addComponentOrReplace(transform110)

const wallPlainGlass26 = new Entity('wallPlainGlass26')
engine.addEntity(wallPlainGlass26)
wallPlainGlass26.setParent(_scene)
wallPlainGlass26.addComponentOrReplace(gltfShape8)
const transform111 = new Transform({
  position: new Vector3(30, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass26.addComponentOrReplace(transform111)

const wallPlainWhite12 = new Entity('wallPlainWhite12')
engine.addEntity(wallPlainWhite12)
wallPlainWhite12.setParent(_scene)
wallPlainWhite12.addComponentOrReplace(gltfShape5)
const transform112 = new Transform({
  position: new Vector3(30, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite12.addComponentOrReplace(transform112)

const wallPlainGlass27 = new Entity('wallPlainGlass27')
engine.addEntity(wallPlainGlass27)
wallPlainGlass27.setParent(_scene)
wallPlainGlass27.addComponentOrReplace(gltfShape8)
const transform113 = new Transform({
  position: new Vector3(32, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass27.addComponentOrReplace(transform113)

const wallPlainGlass28 = new Entity('wallPlainGlass28')
engine.addEntity(wallPlainGlass28)
wallPlainGlass28.setParent(_scene)
wallPlainGlass28.addComponentOrReplace(gltfShape8)
const transform114 = new Transform({
  position: new Vector3(32, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass28.addComponentOrReplace(transform114)

const wallPlainWhite13 = new Entity('wallPlainWhite13')
engine.addEntity(wallPlainWhite13)
wallPlainWhite13.setParent(_scene)
wallPlainWhite13.addComponentOrReplace(gltfShape5)
const transform115 = new Transform({
  position: new Vector3(32, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite13.addComponentOrReplace(transform115)

const wallPlainGlass29 = new Entity('wallPlainGlass29')
engine.addEntity(wallPlainGlass29)
wallPlainGlass29.setParent(_scene)
wallPlainGlass29.addComponentOrReplace(gltfShape8)
const transform116 = new Transform({
  position: new Vector3(34, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass29.addComponentOrReplace(transform116)

const wallPlainGlass30 = new Entity('wallPlainGlass30')
engine.addEntity(wallPlainGlass30)
wallPlainGlass30.setParent(_scene)
wallPlainGlass30.addComponentOrReplace(gltfShape8)
const transform117 = new Transform({
  position: new Vector3(34, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass30.addComponentOrReplace(transform117)

const wallPlainWhite14 = new Entity('wallPlainWhite14')
engine.addEntity(wallPlainWhite14)
wallPlainWhite14.setParent(_scene)
wallPlainWhite14.addComponentOrReplace(gltfShape5)
const transform118 = new Transform({
  position: new Vector3(34, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite14.addComponentOrReplace(transform118)

const wallPlainGlass31 = new Entity('wallPlainGlass31')
engine.addEntity(wallPlainGlass31)
wallPlainGlass31.setParent(_scene)
wallPlainGlass31.addComponentOrReplace(gltfShape8)
const transform119 = new Transform({
  position: new Vector3(36, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass31.addComponentOrReplace(transform119)

const wallPlainGlass32 = new Entity('wallPlainGlass32')
engine.addEntity(wallPlainGlass32)
wallPlainGlass32.setParent(_scene)
wallPlainGlass32.addComponentOrReplace(gltfShape8)
const transform120 = new Transform({
  position: new Vector3(36, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass32.addComponentOrReplace(transform120)

const wallPlainWhite15 = new Entity('wallPlainWhite15')
engine.addEntity(wallPlainWhite15)
wallPlainWhite15.setParent(_scene)
wallPlainWhite15.addComponentOrReplace(gltfShape5)
const transform121 = new Transform({
  position: new Vector3(36, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite15.addComponentOrReplace(transform121)

const wallPlainGlass33 = new Entity('wallPlainGlass33')
engine.addEntity(wallPlainGlass33)
wallPlainGlass33.setParent(_scene)
wallPlainGlass33.addComponentOrReplace(gltfShape8)
const transform122 = new Transform({
  position: new Vector3(38, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass33.addComponentOrReplace(transform122)

const wallPlainGlass34 = new Entity('wallPlainGlass34')
engine.addEntity(wallPlainGlass34)
wallPlainGlass34.setParent(_scene)
wallPlainGlass34.addComponentOrReplace(gltfShape8)
const transform123 = new Transform({
  position: new Vector3(38, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass34.addComponentOrReplace(transform123)

const wallPlainWhite16 = new Entity('wallPlainWhite16')
engine.addEntity(wallPlainWhite16)
wallPlainWhite16.setParent(_scene)
wallPlainWhite16.addComponentOrReplace(gltfShape5)
const transform124 = new Transform({
  position: new Vector3(38, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite16.addComponentOrReplace(transform124)

const wallPlainGlass35 = new Entity('wallPlainGlass35')
engine.addEntity(wallPlainGlass35)
wallPlainGlass35.setParent(_scene)
wallPlainGlass35.addComponentOrReplace(gltfShape8)
const transform125 = new Transform({
  position: new Vector3(40, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass35.addComponentOrReplace(transform125)

const wallPlainGlass36 = new Entity('wallPlainGlass36')
engine.addEntity(wallPlainGlass36)
wallPlainGlass36.setParent(_scene)
wallPlainGlass36.addComponentOrReplace(gltfShape8)
const transform126 = new Transform({
  position: new Vector3(40, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass36.addComponentOrReplace(transform126)

const wallPlainWhite17 = new Entity('wallPlainWhite17')
engine.addEntity(wallPlainWhite17)
wallPlainWhite17.setParent(_scene)
wallPlainWhite17.addComponentOrReplace(gltfShape5)
const transform127 = new Transform({
  position: new Vector3(40, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite17.addComponentOrReplace(transform127)

const wallPlainGlass37 = new Entity('wallPlainGlass37')
engine.addEntity(wallPlainGlass37)
wallPlainGlass37.setParent(_scene)
wallPlainGlass37.addComponentOrReplace(gltfShape8)
const transform128 = new Transform({
  position: new Vector3(42, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass37.addComponentOrReplace(transform128)

const wallPlainGlass38 = new Entity('wallPlainGlass38')
engine.addEntity(wallPlainGlass38)
wallPlainGlass38.setParent(_scene)
wallPlainGlass38.addComponentOrReplace(gltfShape8)
const transform129 = new Transform({
  position: new Vector3(42, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass38.addComponentOrReplace(transform129)

const wallPlainWhite18 = new Entity('wallPlainWhite18')
engine.addEntity(wallPlainWhite18)
wallPlainWhite18.setParent(_scene)
wallPlainWhite18.addComponentOrReplace(gltfShape5)
const transform130 = new Transform({
  position: new Vector3(42, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite18.addComponentOrReplace(transform130)

const wallPlainGlass39 = new Entity('wallPlainGlass39')
engine.addEntity(wallPlainGlass39)
wallPlainGlass39.setParent(_scene)
wallPlainGlass39.addComponentOrReplace(gltfShape8)
const transform131 = new Transform({
  position: new Vector3(44, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass39.addComponentOrReplace(transform131)

const wallPlainGlass40 = new Entity('wallPlainGlass40')
engine.addEntity(wallPlainGlass40)
wallPlainGlass40.setParent(_scene)
wallPlainGlass40.addComponentOrReplace(gltfShape8)
const transform132 = new Transform({
  position: new Vector3(44, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass40.addComponentOrReplace(transform132)

const wallPlainWhite19 = new Entity('wallPlainWhite19')
engine.addEntity(wallPlainWhite19)
wallPlainWhite19.setParent(_scene)
wallPlainWhite19.addComponentOrReplace(gltfShape5)
const transform133 = new Transform({
  position: new Vector3(44, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite19.addComponentOrReplace(transform133)

const wallPlainGlass41 = new Entity('wallPlainGlass41')
engine.addEntity(wallPlainGlass41)
wallPlainGlass41.setParent(_scene)
wallPlainGlass41.addComponentOrReplace(gltfShape8)
const transform134 = new Transform({
  position: new Vector3(46, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass41.addComponentOrReplace(transform134)

const wallPlainGlass42 = new Entity('wallPlainGlass42')
engine.addEntity(wallPlainGlass42)
wallPlainGlass42.setParent(_scene)
wallPlainGlass42.addComponentOrReplace(gltfShape8)
const transform135 = new Transform({
  position: new Vector3(46, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass42.addComponentOrReplace(transform135)

const wallPlainWhite20 = new Entity('wallPlainWhite20')
engine.addEntity(wallPlainWhite20)
wallPlainWhite20.setParent(_scene)
wallPlainWhite20.addComponentOrReplace(gltfShape5)
const transform136 = new Transform({
  position: new Vector3(46, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite20.addComponentOrReplace(transform136)

const wallPlainGlass43 = new Entity('wallPlainGlass43')
engine.addEntity(wallPlainGlass43)
wallPlainGlass43.setParent(_scene)
wallPlainGlass43.addComponentOrReplace(gltfShape8)
const transform137 = new Transform({
  position: new Vector3(48, 9, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass43.addComponentOrReplace(transform137)

const wallPlainGlass44 = new Entity('wallPlainGlass44')
engine.addEntity(wallPlainGlass44)
wallPlainGlass44.setParent(_scene)
wallPlainGlass44.addComponentOrReplace(gltfShape8)
const transform138 = new Transform({
  position: new Vector3(48, 3, 4.000002861022949),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass44.addComponentOrReplace(transform138)

const wallPlainWhite21 = new Entity('wallPlainWhite21')
engine.addEntity(wallPlainWhite21)
wallPlainWhite21.setParent(_scene)
wallPlainWhite21.addComponentOrReplace(gltfShape5)
const transform139 = new Transform({
  position: new Vector3(48, 3, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite21.addComponentOrReplace(transform139)

const wallPlainGlass45 = new Entity('wallPlainGlass45')
engine.addEntity(wallPlainGlass45)
wallPlainGlass45.setParent(_scene)
wallPlainGlass45.addComponentOrReplace(gltfShape8)
const transform140 = new Transform({
  position: new Vector3(20, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass45.addComponentOrReplace(transform140)

const wallPlainWhite23 = new Entity('wallPlainWhite23')
engine.addEntity(wallPlainWhite23)
wallPlainWhite23.setParent(_scene)
wallPlainWhite23.addComponentOrReplace(gltfShape5)
const transform141 = new Transform({
  position: new Vector3(18, 9, 53.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(0.0299998689442873, 7.5000104904174805, 0.9999997615814209)
})
wallPlainWhite23.addComponentOrReplace(transform141)

const wallPlainWhite24 = new Entity('wallPlainWhite24')
engine.addEntity(wallPlainWhite24)
wallPlainWhite24.setParent(_scene)
wallPlainWhite24.addComponentOrReplace(gltfShape5)
const transform142 = new Transform({
  position: new Vector3(20, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite24.addComponentOrReplace(transform142)

const wallPlainGlass46 = new Entity('wallPlainGlass46')
engine.addEntity(wallPlainGlass46)
wallPlainGlass46.setParent(_scene)
wallPlainGlass46.addComponentOrReplace(gltfShape8)
const transform143 = new Transform({
  position: new Vector3(20, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass46.addComponentOrReplace(transform143)

const wallPlainWhite25 = new Entity('wallPlainWhite25')
engine.addEntity(wallPlainWhite25)
wallPlainWhite25.setParent(_scene)
wallPlainWhite25.addComponentOrReplace(gltfShape5)
const transform144 = new Transform({
  position: new Vector3(22, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite25.addComponentOrReplace(transform144)

const wallPlainGlass47 = new Entity('wallPlainGlass47')
engine.addEntity(wallPlainGlass47)
wallPlainGlass47.setParent(_scene)
wallPlainGlass47.addComponentOrReplace(gltfShape8)
const transform145 = new Transform({
  position: new Vector3(22, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass47.addComponentOrReplace(transform145)

const wallPlainGlass48 = new Entity('wallPlainGlass48')
engine.addEntity(wallPlainGlass48)
wallPlainGlass48.setParent(_scene)
wallPlainGlass48.addComponentOrReplace(gltfShape8)
const transform146 = new Transform({
  position: new Vector3(22, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass48.addComponentOrReplace(transform146)

const wallPlainGlass49 = new Entity('wallPlainGlass49')
engine.addEntity(wallPlainGlass49)
wallPlainGlass49.setParent(_scene)
wallPlainGlass49.addComponentOrReplace(gltfShape8)
const transform147 = new Transform({
  position: new Vector3(24, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass49.addComponentOrReplace(transform147)

const wallPlainGlass50 = new Entity('wallPlainGlass50')
engine.addEntity(wallPlainGlass50)
wallPlainGlass50.setParent(_scene)
wallPlainGlass50.addComponentOrReplace(gltfShape8)
const transform148 = new Transform({
  position: new Vector3(24, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass50.addComponentOrReplace(transform148)

const wallPlainWhite26 = new Entity('wallPlainWhite26')
engine.addEntity(wallPlainWhite26)
wallPlainWhite26.setParent(_scene)
wallPlainWhite26.addComponentOrReplace(gltfShape5)
const transform149 = new Transform({
  position: new Vector3(24, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite26.addComponentOrReplace(transform149)

const wallPlainGlass51 = new Entity('wallPlainGlass51')
engine.addEntity(wallPlainGlass51)
wallPlainGlass51.setParent(_scene)
wallPlainGlass51.addComponentOrReplace(gltfShape8)
const transform150 = new Transform({
  position: new Vector3(26, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass51.addComponentOrReplace(transform150)

const wallPlainGlass52 = new Entity('wallPlainGlass52')
engine.addEntity(wallPlainGlass52)
wallPlainGlass52.setParent(_scene)
wallPlainGlass52.addComponentOrReplace(gltfShape8)
const transform151 = new Transform({
  position: new Vector3(26, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass52.addComponentOrReplace(transform151)

const wallPlainGlass53 = new Entity('wallPlainGlass53')
engine.addEntity(wallPlainGlass53)
wallPlainGlass53.setParent(_scene)
wallPlainGlass53.addComponentOrReplace(gltfShape8)
const transform152 = new Transform({
  position: new Vector3(30, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass53.addComponentOrReplace(transform152)

const wallPlainGlass54 = new Entity('wallPlainGlass54')
engine.addEntity(wallPlainGlass54)
wallPlainGlass54.setParent(_scene)
wallPlainGlass54.addComponentOrReplace(gltfShape8)
const transform153 = new Transform({
  position: new Vector3(28, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass54.addComponentOrReplace(transform153)

const wallPlainWhite28 = new Entity('wallPlainWhite28')
engine.addEntity(wallPlainWhite28)
wallPlainWhite28.setParent(_scene)
wallPlainWhite28.addComponentOrReplace(gltfShape5)
const transform154 = new Transform({
  position: new Vector3(26, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite28.addComponentOrReplace(transform154)

const wallPlainGlass55 = new Entity('wallPlainGlass55')
engine.addEntity(wallPlainGlass55)
wallPlainGlass55.setParent(_scene)
wallPlainGlass55.addComponentOrReplace(gltfShape8)
const transform155 = new Transform({
  position: new Vector3(28, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass55.addComponentOrReplace(transform155)

const wallPlainWhite29 = new Entity('wallPlainWhite29')
engine.addEntity(wallPlainWhite29)
wallPlainWhite29.setParent(_scene)
wallPlainWhite29.addComponentOrReplace(gltfShape5)
const transform156 = new Transform({
  position: new Vector3(28, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite29.addComponentOrReplace(transform156)

const wallPlainGlass56 = new Entity('wallPlainGlass56')
engine.addEntity(wallPlainGlass56)
wallPlainGlass56.setParent(_scene)
wallPlainGlass56.addComponentOrReplace(gltfShape8)
const transform157 = new Transform({
  position: new Vector3(30, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass56.addComponentOrReplace(transform157)

const wallPlainWhite30 = new Entity('wallPlainWhite30')
engine.addEntity(wallPlainWhite30)
wallPlainWhite30.setParent(_scene)
wallPlainWhite30.addComponentOrReplace(gltfShape5)
const transform158 = new Transform({
  position: new Vector3(30, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite30.addComponentOrReplace(transform158)

const wallPlainGlass57 = new Entity('wallPlainGlass57')
engine.addEntity(wallPlainGlass57)
wallPlainGlass57.setParent(_scene)
wallPlainGlass57.addComponentOrReplace(gltfShape8)
const transform159 = new Transform({
  position: new Vector3(32, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass57.addComponentOrReplace(transform159)

const wallPlainWhite31 = new Entity('wallPlainWhite31')
engine.addEntity(wallPlainWhite31)
wallPlainWhite31.setParent(_scene)
wallPlainWhite31.addComponentOrReplace(gltfShape5)
const transform160 = new Transform({
  position: new Vector3(32, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite31.addComponentOrReplace(transform160)

const wallPlainGlass58 = new Entity('wallPlainGlass58')
engine.addEntity(wallPlainGlass58)
wallPlainGlass58.setParent(_scene)
wallPlainGlass58.addComponentOrReplace(gltfShape8)
const transform161 = new Transform({
  position: new Vector3(32, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass58.addComponentOrReplace(transform161)

const wallPlainGlass59 = new Entity('wallPlainGlass59')
engine.addEntity(wallPlainGlass59)
wallPlainGlass59.setParent(_scene)
wallPlainGlass59.addComponentOrReplace(gltfShape8)
const transform162 = new Transform({
  position: new Vector3(34, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass59.addComponentOrReplace(transform162)

const wallPlainGlass60 = new Entity('wallPlainGlass60')
engine.addEntity(wallPlainGlass60)
wallPlainGlass60.setParent(_scene)
wallPlainGlass60.addComponentOrReplace(gltfShape8)
const transform163 = new Transform({
  position: new Vector3(34, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass60.addComponentOrReplace(transform163)

const wallPlainWhite32 = new Entity('wallPlainWhite32')
engine.addEntity(wallPlainWhite32)
wallPlainWhite32.setParent(_scene)
wallPlainWhite32.addComponentOrReplace(gltfShape5)
const transform164 = new Transform({
  position: new Vector3(34, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite32.addComponentOrReplace(transform164)

const wallPlainGlass61 = new Entity('wallPlainGlass61')
engine.addEntity(wallPlainGlass61)
wallPlainGlass61.setParent(_scene)
wallPlainGlass61.addComponentOrReplace(gltfShape8)
const transform165 = new Transform({
  position: new Vector3(36, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass61.addComponentOrReplace(transform165)

const wallPlainWhite33 = new Entity('wallPlainWhite33')
engine.addEntity(wallPlainWhite33)
wallPlainWhite33.setParent(_scene)
wallPlainWhite33.addComponentOrReplace(gltfShape5)
const transform166 = new Transform({
  position: new Vector3(36, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite33.addComponentOrReplace(transform166)

const wallPlainGlass62 = new Entity('wallPlainGlass62')
engine.addEntity(wallPlainGlass62)
wallPlainGlass62.setParent(_scene)
wallPlainGlass62.addComponentOrReplace(gltfShape8)
const transform167 = new Transform({
  position: new Vector3(38, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass62.addComponentOrReplace(transform167)

const wallPlainWhite34 = new Entity('wallPlainWhite34')
engine.addEntity(wallPlainWhite34)
wallPlainWhite34.setParent(_scene)
wallPlainWhite34.addComponentOrReplace(gltfShape5)
const transform168 = new Transform({
  position: new Vector3(38, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite34.addComponentOrReplace(transform168)

const wallPlainGlass63 = new Entity('wallPlainGlass63')
engine.addEntity(wallPlainGlass63)
wallPlainGlass63.setParent(_scene)
wallPlainGlass63.addComponentOrReplace(gltfShape8)
const transform169 = new Transform({
  position: new Vector3(38, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass63.addComponentOrReplace(transform169)

const wallPlainGlass64 = new Entity('wallPlainGlass64')
engine.addEntity(wallPlainGlass64)
wallPlainGlass64.setParent(_scene)
wallPlainGlass64.addComponentOrReplace(gltfShape8)
const transform170 = new Transform({
  position: new Vector3(36, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass64.addComponentOrReplace(transform170)

const wallPlainGlass65 = new Entity('wallPlainGlass65')
engine.addEntity(wallPlainGlass65)
wallPlainGlass65.setParent(_scene)
wallPlainGlass65.addComponentOrReplace(gltfShape8)
const transform171 = new Transform({
  position: new Vector3(40, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass65.addComponentOrReplace(transform171)

const wallPlainGlass66 = new Entity('wallPlainGlass66')
engine.addEntity(wallPlainGlass66)
wallPlainGlass66.setParent(_scene)
wallPlainGlass66.addComponentOrReplace(gltfShape8)
const transform172 = new Transform({
  position: new Vector3(40, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass66.addComponentOrReplace(transform172)

const wallPlainWhite35 = new Entity('wallPlainWhite35')
engine.addEntity(wallPlainWhite35)
wallPlainWhite35.setParent(_scene)
wallPlainWhite35.addComponentOrReplace(gltfShape5)
const transform173 = new Transform({
  position: new Vector3(40, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite35.addComponentOrReplace(transform173)

const wallPlainGlass67 = new Entity('wallPlainGlass67')
engine.addEntity(wallPlainGlass67)
wallPlainGlass67.setParent(_scene)
wallPlainGlass67.addComponentOrReplace(gltfShape8)
const transform174 = new Transform({
  position: new Vector3(42, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass67.addComponentOrReplace(transform174)

const wallPlainGlass68 = new Entity('wallPlainGlass68')
engine.addEntity(wallPlainGlass68)
wallPlainGlass68.setParent(_scene)
wallPlainGlass68.addComponentOrReplace(gltfShape8)
const transform175 = new Transform({
  position: new Vector3(44, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass68.addComponentOrReplace(transform175)

const wallPlainGlass69 = new Entity('wallPlainGlass69')
engine.addEntity(wallPlainGlass69)
wallPlainGlass69.setParent(_scene)
wallPlainGlass69.addComponentOrReplace(gltfShape8)
const transform176 = new Transform({
  position: new Vector3(44, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass69.addComponentOrReplace(transform176)

const wallPlainWhite36 = new Entity('wallPlainWhite36')
engine.addEntity(wallPlainWhite36)
wallPlainWhite36.setParent(_scene)
wallPlainWhite36.addComponentOrReplace(gltfShape5)
const transform177 = new Transform({
  position: new Vector3(42, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite36.addComponentOrReplace(transform177)

const wallPlainGlass70 = new Entity('wallPlainGlass70')
engine.addEntity(wallPlainGlass70)
wallPlainGlass70.setParent(_scene)
wallPlainGlass70.addComponentOrReplace(gltfShape8)
const transform178 = new Transform({
  position: new Vector3(42, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass70.addComponentOrReplace(transform178)

const wallPlainWhite37 = new Entity('wallPlainWhite37')
engine.addEntity(wallPlainWhite37)
wallPlainWhite37.setParent(_scene)
wallPlainWhite37.addComponentOrReplace(gltfShape5)
const transform179 = new Transform({
  position: new Vector3(44, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite37.addComponentOrReplace(transform179)

const wallPlainGlass71 = new Entity('wallPlainGlass71')
engine.addEntity(wallPlainGlass71)
wallPlainGlass71.setParent(_scene)
wallPlainGlass71.addComponentOrReplace(gltfShape8)
const transform180 = new Transform({
  position: new Vector3(46, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass71.addComponentOrReplace(transform180)

const wallPlainGlass72 = new Entity('wallPlainGlass72')
engine.addEntity(wallPlainGlass72)
wallPlainGlass72.setParent(_scene)
wallPlainGlass72.addComponentOrReplace(gltfShape8)
const transform181 = new Transform({
  position: new Vector3(46, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass72.addComponentOrReplace(transform181)

const wallPlainWhite38 = new Entity('wallPlainWhite38')
engine.addEntity(wallPlainWhite38)
wallPlainWhite38.setParent(_scene)
wallPlainWhite38.addComponentOrReplace(gltfShape5)
const transform182 = new Transform({
  position: new Vector3(46, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite38.addComponentOrReplace(transform182)

const wallPlainGlass73 = new Entity('wallPlainGlass73')
engine.addEntity(wallPlainGlass73)
wallPlainGlass73.setParent(_scene)
wallPlainGlass73.addComponentOrReplace(gltfShape8)
const transform183 = new Transform({
  position: new Vector3(48, 9, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.125, 0.9999999403953552)
})
wallPlainGlass73.addComponentOrReplace(transform183)

const wallPlainGlass74 = new Entity('wallPlainGlass74')
engine.addEntity(wallPlainGlass74)
wallPlainGlass74.setParent(_scene)
wallPlainGlass74.addComponentOrReplace(gltfShape8)
const transform184 = new Transform({
  position: new Vector3(48, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.9999999403953552, 1.5, 0.9999999403953552)
})
wallPlainGlass74.addComponentOrReplace(transform184)

const wallPlainWhite39 = new Entity('wallPlainWhite39')
engine.addEntity(wallPlainWhite39)
wallPlainWhite39.setParent(_scene)
wallPlainWhite39.addComponentOrReplace(gltfShape5)
const transform185 = new Transform({
  position: new Vector3(48, 3, 53.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.029999809339642525, 2.5, 0.9999998807907104)
})
wallPlainWhite39.addComponentOrReplace(transform185)

const wallPlainGlass75 = new Entity('wallPlainGlass75')
engine.addEntity(wallPlainGlass75)
wallPlainGlass75.setParent(_scene)
const transform186 = new Transform({
  position: new Vector3(18, 3, 8.5),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(5.625026226043701, 1.5, 1.0000063180923462)
})
wallPlainGlass75.addComponentOrReplace(transform186)
wallPlainGlass75.addComponentOrReplace(gltfShape8)

const wallPlainGlass76 = new Entity('wallPlainGlass76')
engine.addEntity(wallPlainGlass76)
wallPlainGlass76.setParent(_scene)
wallPlainGlass76.addComponentOrReplace(gltfShape8)
const transform187 = new Transform({
  position: new Vector3(18, 3, 31.5),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(2.5000112056732178, 1.5, 1.000005841255188)
})
wallPlainGlass76.addComponentOrReplace(transform187)

const wallPlainGlass77 = new Entity('wallPlainGlass77')
engine.addEntity(wallPlainGlass77)
wallPlainGlass77.setParent(_scene)
wallPlainGlass77.addComponentOrReplace(gltfShape8)
const transform188 = new Transform({
  position: new Vector3(18, 3, 22.5),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(2.500011682510376, 1.5, 1.000006079673767)
})
wallPlainGlass77.addComponentOrReplace(transform188)

const wallPlainGlass78 = new Entity('wallPlainGlass78')
engine.addEntity(wallPlainGlass78)
wallPlainGlass78.setParent(_scene)
wallPlainGlass78.addComponentOrReplace(gltfShape8)
const transform189 = new Transform({
  position: new Vector3(18, 3, 39.5),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(5.625029563903809, 1.5, 1.0000075101852417)
})
wallPlainGlass78.addComponentOrReplace(transform189)

const wallPlainGlass11 = new Entity('wallPlainGlass11')
engine.addEntity(wallPlainGlass11)
wallPlainGlass11.setParent(_scene)
wallPlainGlass11.addComponentOrReplace(gltfShape8)
const transform190 = new Transform({
  position: new Vector3(18, 11, 4),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(2.5000176429748535, 0.5625, 0.5000048875808716)
})
wallPlainGlass11.addComponentOrReplace(transform190)

const concreteWall33 = new Entity('concreteWall33')
engine.addEntity(concreteWall33)
concreteWall33.setParent(_scene)
concreteWall33.addComponentOrReplace(gltfShape3)
const transform191 = new Transform({
  position: new Vector3(18.000001907348633, 11, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.12749944627285004, 0.48944997787475586, 0.49999985098838806)
})
concreteWall33.addComponentOrReplace(transform191)

const wallPlainGlass79 = new Entity('wallPlainGlass79')
engine.addEntity(wallPlainGlass79)
wallPlainGlass79.setParent(_scene)
wallPlainGlass79.addComponentOrReplace(gltfShape8)
const transform192 = new Transform({
  position: new Vector3(18, 11, 9),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(2.5000181198120117, 0.5625, 0.5000050067901611)
})
wallPlainGlass79.addComponentOrReplace(transform192)

const concreteWall34 = new Entity('concreteWall34')
engine.addEntity(concreteWall34)
concreteWall34.setParent(_scene)
concreteWall34.addComponentOrReplace(gltfShape3)
const transform193 = new Transform({
  position: new Vector3(18.000001907348633, 11, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.12749944627285004, 0.4992389678955078, 0.49999985098838806)
})
concreteWall34.addComponentOrReplace(transform193)

const wallPlainGlass80 = new Entity('wallPlainGlass80')
engine.addEntity(wallPlainGlass80)
wallPlainGlass80.setParent(_scene)
wallPlainGlass80.addComponentOrReplace(gltfShape8)
const transform194 = new Transform({
  position: new Vector3(18, 11, 14),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(2.5000181198120117, 0.5625, 0.5000050067901611)
})
wallPlainGlass80.addComponentOrReplace(transform194)

const concreteWall35 = new Entity('concreteWall35')
engine.addEntity(concreteWall35)
concreteWall35.setParent(_scene)
concreteWall35.addComponentOrReplace(gltfShape3)
const transform195 = new Transform({
  position: new Vector3(18.000001907348633, 11, 19),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.12749944627285004, 0.48944997787475586, 0.49999985098838806)
})
concreteWall35.addComponentOrReplace(transform195)

const wallPlainGlass81 = new Entity('wallPlainGlass81')
engine.addEntity(wallPlainGlass81)
wallPlainGlass81.setParent(_scene)
wallPlainGlass81.addComponentOrReplace(gltfShape8)
const transform196 = new Transform({
  position: new Vector3(18, 11, 19),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(2.50001859664917, 0.5625, 0.5000051259994507)
})
wallPlainGlass81.addComponentOrReplace(transform196)

const concreteWall36 = new Entity('concreteWall36')
engine.addEntity(concreteWall36)
concreteWall36.setParent(_scene)
concreteWall36.addComponentOrReplace(gltfShape3)
const transform197 = new Transform({
  position: new Vector3(18.000001907348633, 11, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.12749944627285004, 0.48944997787475586, 0.49999985098838806)
})
concreteWall36.addComponentOrReplace(transform197)

const wallPlainGlass82 = new Entity('wallPlainGlass82')
engine.addEntity(wallPlainGlass82)
wallPlainGlass82.setParent(_scene)
wallPlainGlass82.addComponentOrReplace(gltfShape8)
const transform198 = new Transform({
  position: new Vector3(18, 11, 24),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(2.50001859664917, 0.5625, 0.5000051259994507)
})
wallPlainGlass82.addComponentOrReplace(transform198)

const concreteWall37 = new Entity('concreteWall37')
engine.addEntity(concreteWall37)
concreteWall37.setParent(_scene)
concreteWall37.addComponentOrReplace(gltfShape3)
const transform199 = new Transform({
  position: new Vector3(18.000001907348633, 11, 29),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.12749944627285004, 0.48944997787475586, 0.49999985098838806)
})
concreteWall37.addComponentOrReplace(transform199)

const wallPlainGlass83 = new Entity('wallPlainGlass83')
engine.addEntity(wallPlainGlass83)
wallPlainGlass83.setParent(_scene)
wallPlainGlass83.addComponentOrReplace(gltfShape8)
const transform200 = new Transform({
  position: new Vector3(18, 11, 29),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(2.500019073486328, 0.5625, 0.5000052452087402)
})
wallPlainGlass83.addComponentOrReplace(transform200)

const concreteWall38 = new Entity('concreteWall38')
engine.addEntity(concreteWall38)
concreteWall38.setParent(_scene)
concreteWall38.addComponentOrReplace(gltfShape3)
const transform201 = new Transform({
  position: new Vector3(18.000001907348633, 11, 34),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.12749944627285004, 0.5090279579162598, 0.49999985098838806)
})
concreteWall38.addComponentOrReplace(transform201)

const wallPlainGlass84 = new Entity('wallPlainGlass84')
engine.addEntity(wallPlainGlass84)
wallPlainGlass84.setParent(_scene)
wallPlainGlass84.addComponentOrReplace(gltfShape8)
const transform202 = new Transform({
  position: new Vector3(18, 11, 34),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(2.500019073486328, 0.5625, 0.5000052452087402)
})
wallPlainGlass84.addComponentOrReplace(transform202)

const concreteWall39 = new Entity('concreteWall39')
engine.addEntity(concreteWall39)
concreteWall39.setParent(_scene)
concreteWall39.addComponentOrReplace(gltfShape3)
const transform203 = new Transform({
  position: new Vector3(18.000001907348633, 11, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.12749944627285004, 0.48944997787475586, 0.49999985098838806)
})
concreteWall39.addComponentOrReplace(transform203)

const wallPlainGlass85 = new Entity('wallPlainGlass85')
engine.addEntity(wallPlainGlass85)
wallPlainGlass85.setParent(_scene)
wallPlainGlass85.addComponentOrReplace(gltfShape8)
const transform204 = new Transform({
  position: new Vector3(18, 11, 39),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(2.5000195503234863, 0.5625, 0.5000053644180298)
})
wallPlainGlass85.addComponentOrReplace(transform204)

const concreteWall40 = new Entity('concreteWall40')
engine.addEntity(concreteWall40)
concreteWall40.setParent(_scene)
concreteWall40.addComponentOrReplace(gltfShape3)
const transform205 = new Transform({
  position: new Vector3(18.000001907348633, 11, 44),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.12749944627285004, 0.48944997787475586, 0.49999985098838806)
})
concreteWall40.addComponentOrReplace(transform205)

const wallPlainGlass86 = new Entity('wallPlainGlass86')
engine.addEntity(wallPlainGlass86)
wallPlainGlass86.setParent(_scene)
wallPlainGlass86.addComponentOrReplace(gltfShape8)
const transform206 = new Transform({
  position: new Vector3(18, 11, 44),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(1.8750152587890625, 0.5625, 0.500005841255188)
})
wallPlainGlass86.addComponentOrReplace(transform206)

const concreteWall41 = new Entity('concreteWall41')
engine.addEntity(concreteWall41)
concreteWall41.setParent(_scene)
concreteWall41.addComponentOrReplace(gltfShape3)
const transform207 = new Transform({
  position: new Vector3(18, 11, 48),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.12749944627285004, 0.48944997787475586, 0.49999985098838806)
})
concreteWall41.addComponentOrReplace(transform207)

const wallPlainGlass87 = new Entity('wallPlainGlass87')
engine.addEntity(wallPlainGlass87)
wallPlainGlass87.setParent(_scene)
wallPlainGlass87.addComponentOrReplace(gltfShape8)
const transform208 = new Transform({
  position: new Vector3(18, 11, 48),
  rotation: new Quaternion(2.194883018418652e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(2.500019073486328, 0.5625, 0.5000057220458984)
})
wallPlainGlass87.addComponentOrReplace(transform208)

const concreteWall42 = new Entity('concreteWall42')
engine.addEntity(concreteWall42)
concreteWall42.setParent(_scene)
concreteWall42.addComponentOrReplace(gltfShape3)
const transform209 = new Transform({
  position: new Vector3(18.000001907348633, 11, 53),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.12749944627285004, 0.48944997787475586, 0.49999985098838806)
})
concreteWall42.addComponentOrReplace(transform209)

const concreteWall43 = new Entity('concreteWall43')
engine.addEntity(concreteWall43)
concreteWall43.setParent(_scene)
concreteWall43.addComponentOrReplace(gltfShape3)
const transform210 = new Transform({
  position: new Vector3(17.5, 13, 53),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(16.611482620239258, 0.4799997806549072, 1.0000104904174805)
})
concreteWall43.addComponentOrReplace(transform210)

const concreteWall44 = new Entity('concreteWall44')
engine.addEntity(concreteWall44)
concreteWall44.setParent(_scene)
concreteWall44.addComponentOrReplace(gltfShape3)
const transform211 = new Transform({
  position: new Vector3(17.5, 13, 37),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(16.61149024963379, 0.4799997806549072, 1.0000109672546387)
})
concreteWall44.addComponentOrReplace(transform211)

const wallPlainWhite22 = new Entity('wallPlainWhite22')
engine.addEntity(wallPlainWhite22)
wallPlainWhite22.setParent(_scene)
const transform212 = new Transform({
  position: new Vector3(24.5, 3, 25),
  rotation: new Quaternion(1.539415254273621e-15, -0.7071067690849304, 8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(4, 1.5, 1)
})
wallPlainWhite22.addComponentOrReplace(transform212)
wallPlainWhite22.addComponentOrReplace(gltfShape5)

const wallPlainWhite27 = new Entity('wallPlainWhite27')
engine.addEntity(wallPlainWhite27)
wallPlainWhite27.setParent(_scene)
wallPlainWhite27.addComponentOrReplace(gltfShape5)
const transform213 = new Transform({
  position: new Vector3(24.5, 9, 25),
  rotation: new Quaternion(-0.44858381152153015, -0.5466009378433228, 0.4485839307308197, -0.5466009378433228),
  scale: new Vector3(4.000008583068848, 1.0183101892471313, 1.0183093547821045)
})
wallPlainWhite27.addComponentOrReplace(transform213)

const wallPlainWhite40 = new Entity('wallPlainWhite40')
engine.addEntity(wallPlainWhite40)
wallPlainWhite40.setParent(_scene)
const transform214 = new Transform({
  position: new Vector3(48, 3, 22),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4949941039085388, 3, 4.125000953674316)
})
wallPlainWhite40.addComponentOrReplace(transform214)
wallPlainWhite40.addComponentOrReplace(gltfShape5)

const wallPlainWhite41 = new Entity('wallPlainWhite41')
engine.addEntity(wallPlainWhite41)
wallPlainWhite41.setParent(_scene)
wallPlainWhite41.addComponentOrReplace(gltfShape5)
const transform215 = new Transform({
  position: new Vector3(48, 3, 37),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4949941039085388, 3, 4.125000953674316)
})
wallPlainWhite41.addComponentOrReplace(transform215)

const wallPlainWhite42 = new Entity('wallPlainWhite42')
engine.addEntity(wallPlainWhite42)
wallPlainWhite42.setParent(_scene)
wallPlainWhite42.addComponentOrReplace(gltfShape5)
const transform216 = new Transform({
  position: new Vector3(48, 3, 52.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4949941039085388, 3, 4.125000953674316)
})
wallPlainWhite42.addComponentOrReplace(transform216)

const concreteWall45 = new Entity('concreteWall45')
engine.addEntity(concreteWall45)
concreteWall45.setParent(_scene)
concreteWall45.addComponentOrReplace(gltfShape3)
const transform217 = new Transform({
  position: new Vector3(49, 11.5, 79.5),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(37.376041412353516, 0.9599995613098145, 3.0000545978546143)
})
concreteWall45.addComponentOrReplace(transform217)

const wallPlainDarkGrey6 = new Entity('wallPlainDarkGrey6')
engine.addEntity(wallPlainDarkGrey6)
wallPlainDarkGrey6.setParent(_scene)
wallPlainDarkGrey6.addComponentOrReplace(gltfShape2)
const transform218 = new Transform({
  position: new Vector3(22.5, 0, 9),
  rotation: new Quaternion(0.5, -0.5, 0.4999999403953552, 0.5000000596046448),
  scale: new Vector3(-3.437499523162842, -6.735001564025879, 8.490005493164062)
})
wallPlainDarkGrey6.addComponentOrReplace(transform218)

const concreteWall47 = new Entity('concreteWall47')
engine.addEntity(concreteWall47)
concreteWall47.setParent(_scene)
concreteWall47.addComponentOrReplace(gltfShape3)
const transform219 = new Transform({
  position: new Vector3(44.5, 9.5, 3.5),
  rotation: new Quaternion(2.4085271740892887e-15, 0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.229391574859619, 1.4399993419647217, -13.50026798248291)
})
concreteWall47.addComponentOrReplace(transform219)

const concreteWall46 = new Entity('concreteWall46')
engine.addEntity(concreteWall46)
concreteWall46.setParent(_scene)
concreteWall46.addComponentOrReplace(gltfShape3)
const transform220 = new Transform({
  position: new Vector3(45.5, 15, 3.25),
  rotation: new Quaternion(0.5000000596046448, 0.4999999403953552, 0.5, 0.5),
  scale: new Vector3(6.291688919067383, 0.7199997305870056, -13.500272750854492)
})
concreteWall46.addComponentOrReplace(transform220)

const wallPlainPeach6 = new Entity('wallPlainPeach6')
engine.addEntity(wallPlainPeach6)
wallPlainPeach6.setParent(_scene)
const transform221 = new Transform({
  position: new Vector3(48.5, 2.5, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.2600999176502228, 2.25, 7.499999046325684)
})
wallPlainPeach6.addComponentOrReplace(transform221)
wallPlainPeach6.addComponentOrReplace(gltfShape7)

const wallPlainPeach7 = new Entity('wallPlainPeach7')
engine.addEntity(wallPlainPeach7)
wallPlainPeach7.setParent(_scene)
wallPlainPeach7.addComponentOrReplace(gltfShape7)
const transform222 = new Transform({
  position: new Vector3(48.5, 2.5, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.2600999176502228, 2.25, 7.499999046325684)
})
wallPlainPeach7.addComponentOrReplace(transform222)

const roofWhiteEdges = new Entity('roofWhiteEdges')
engine.addEntity(roofWhiteEdges)
roofWhiteEdges.setParent(_scene)
const transform223 = new Transform({
  position: new Vector3(50, 11, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(12.5, 1, 19.500003814697266)
})
roofWhiteEdges.addComponentOrReplace(transform223)
const gltfShape9 = new GLTFShape("7baaf62a-9809-47b3-b4b6-92fca93045e3/WhiteRoof_4Edges.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
roofWhiteEdges.addComponentOrReplace(gltfShape9)

const concreteWall48 = new Entity('concreteWall48')
engine.addEntity(concreteWall48)
concreteWall48.setParent(_scene)
concreteWall48.addComponentOrReplace(gltfShape3)
const transform224 = new Transform({
  position: new Vector3(49.50000762939453, 0, 80),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.2749944925308228, 3.7649998664855957, 1.9999994039535522)
})
concreteWall48.addComponentOrReplace(transform224)

const whiteCar = new Entity('whiteCar')
engine.addEntity(whiteCar)
whiteCar.setParent(_scene)
const transform225 = new Transform({
  position: new Vector3(38.5, 3, 17.5),
  rotation: new Quaternion(1.0167317630719631e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.500002145767212, 1, 1.500002384185791)
})
whiteCar.addComponentOrReplace(transform225)
const gltfShape10 = new GLTFShape("f588367d-f37d-40e2-ac5e-027120869dbe/White_Car.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
whiteCar.addComponentOrReplace(gltfShape10)

const whiteCar2 = new Entity('whiteCar2')
engine.addEntity(whiteCar2)
whiteCar2.setParent(_scene)
whiteCar2.addComponentOrReplace(gltfShape10)
const transform226 = new Transform({
  position: new Vector3(38.5, 3, 30.5),
  rotation: new Quaternion(1.0167317630719631e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000028610229492, 1, 1.5000030994415283)
})
whiteCar2.addComponentOrReplace(transform226)

const whiteCar3 = new Entity('whiteCar3')
engine.addEntity(whiteCar3)
whiteCar3.setParent(_scene)
whiteCar3.addComponentOrReplace(gltfShape10)
const transform227 = new Transform({
  position: new Vector3(38.5, 3, 41.5),
  rotation: new Quaternion(1.0167317630719631e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000051259994507, 1, 1.5000053644180298)
})
whiteCar3.addComponentOrReplace(transform227)

const whiteCar4 = new Entity('whiteCar4')
engine.addEntity(whiteCar4)
whiteCar4.setParent(_scene)
whiteCar4.addComponentOrReplace(gltfShape10)
const transform228 = new Transform({
  position: new Vector3(26.5, 3, 15),
  rotation: new Quaternion(-1.290464965416412e-15, 1, -1.1920928244535389e-7, -8.940696716308594e-8),
  scale: new Vector3(1.5000029802322388, 1, 1.5000032186508179)
})
whiteCar4.addComponentOrReplace(transform228)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform229 = new Transform({
  position: new Vector3(25, 6.5, 29),
  rotation: new Quaternion(-1.900392956064381e-15, -0.7071068286895752, 8.429368847373553e-8, -0.7071067690849304),
  scale: new Vector3(4, 2, 4)
})
imageFromURL.addComponentOrReplace(transform229)

const concreteWall49 = new Entity('concreteWall49')
engine.addEntity(concreteWall49)
concreteWall49.setParent(_scene)
concreteWall49.addComponentOrReplace(gltfShape3)
const transform230 = new Transform({
  position: new Vector3(49, 11.5, 78),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(37.37605667114258, 0.9599995613098145, 3.0000574588775635)
})
concreteWall49.addComponentOrReplace(transform230)

const qrDonationsBlackbo = new Entity('qrDonationsBlackbo')
engine.addEntity(qrDonationsBlackbo)
qrDonationsBlackbo.setParent(_scene)
const transform231 = new Transform({
  position: new Vector3(30, 3, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
qrDonationsBlackbo.addComponentOrReplace(transform231)

const qrDonationsBlackbo3 = new Entity('qrDonationsBlackbo3')
engine.addEntity(qrDonationsBlackbo3)
qrDonationsBlackbo3.setParent(_scene)
const transform232 = new Transform({
  position: new Vector3(41.5, 3, 20.5),
  rotation: new Quaternion(-7.029745599038541e-16, 0.7071068286895752, -8.429368847373553e-8, -0.7071067094802856),
  scale: new Vector3(0.9999994039535522, 1, 0.9999994039535522)
})
qrDonationsBlackbo3.addComponentOrReplace(transform232)

const qrDonationsBlackbo2 = new Entity('qrDonationsBlackbo2')
engine.addEntity(qrDonationsBlackbo2)
qrDonationsBlackbo2.setParent(_scene)
const transform233 = new Transform({
  position: new Vector3(41.5, 3, 33),
  rotation: new Quaternion(-7.029745599038541e-16, 0.7071068286895752, -8.429368847373553e-8, -0.7071067094802856),
  scale: new Vector3(0.9999990463256836, 1, 0.9999990463256836)
})
qrDonationsBlackbo2.addComponentOrReplace(transform233)

const qrDonationsBlackbo4 = new Entity('qrDonationsBlackbo4')
engine.addEntity(qrDonationsBlackbo4)
qrDonationsBlackbo4.setParent(_scene)
const transform234 = new Transform({
  position: new Vector3(41.5, 3, 44.5),
  rotation: new Quaternion(-7.029745599038541e-16, 0.7071068286895752, -8.429368847373553e-8, -0.7071067094802856),
  scale: new Vector3(0.9999984502792358, 1, 0.9999984502792358)
})
qrDonationsBlackbo4.addComponentOrReplace(transform234)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform235 = new Transform({
  position: new Vector3(51, 12.5, 40),
  rotation: new Quaternion(0.0693085640668869, -0.703701913356781, -0.06930849701166153, -0.703701913356781),
  scale: new Vector3(12.812527656555176, 10.093733787536621, 1.252205729484558)
})
plainText.addComponentOrReplace(transform235)

const whiteCar5 = new Entity('whiteCar5')
engine.addEntity(whiteCar5)
whiteCar5.setParent(_scene)
whiteCar5.addComponentOrReplace(gltfShape10)
const transform236 = new Transform({
  position: new Vector3(28.5, 3, 42.5),
  rotation: new Quaternion(-1.188549008290709e-15, -0.09801721572875977, 1.1684561762592693e-8, 0.9951847791671753),
  scale: new Vector3(1.5000044107437134, 1, 1.5000044107437134)
})
whiteCar5.addComponentOrReplace(transform236)

const qrDonationsBlackbo5 = new Entity('qrDonationsBlackbo5')
engine.addEntity(qrDonationsBlackbo5)
qrDonationsBlackbo5.setParent(_scene)
const transform237 = new Transform({
  position: new Vector3(31, 3, 44.5),
  rotation: new Quaternion(-5.8400630489061685e-15, 0.9951847791671753, -1.1863525628541538e-7, 0.09801721572875977),
  scale: new Vector3(1.0000005960464478, 1, 1.0000005960464478)
})
qrDonationsBlackbo5.addComponentOrReplace(transform237)

const wallPlainBlack = new Entity('wallPlainBlack')
engine.addEntity(wallPlainBlack)
wallPlainBlack.setParent(_scene)
const transform238 = new Transform({
  position: new Vector3(47.5, 16, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.999999046325684, 1, 0.9999998807907104)
})
wallPlainBlack.addComponentOrReplace(transform238)
const gltfShape11 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
wallPlainBlack.addComponentOrReplace(gltfShape11)

const wallPlainBlack2 = new Entity('wallPlainBlack2')
engine.addEntity(wallPlainBlack2)
wallPlainBlack2.setParent(_scene)
wallPlainBlack2.addComponentOrReplace(gltfShape11)
const transform239 = new Transform({
  position: new Vector3(43.5, 16, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(11.999998092651367, 1, 0.9999998211860657)
})
wallPlainBlack2.addComponentOrReplace(transform239)

const wallPlainBlack5 = new Entity('wallPlainBlack5')
engine.addEntity(wallPlainBlack5)
wallPlainBlack5.setParent(_scene)
wallPlainBlack5.addComponentOrReplace(gltfShape11)
const transform240 = new Transform({
  position: new Vector3(19.5, 16, 39.5),
  rotation: new Quaternion(-1.5394204423504229e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(17.9999942779541, 1, 0.9999997019767761)
})
wallPlainBlack5.addComponentOrReplace(transform240)

const wallPlainBlack6 = new Entity('wallPlainBlack6')
engine.addEntity(wallPlainBlack6)
wallPlainBlack6.setParent(_scene)
wallPlainBlack6.addComponentOrReplace(gltfShape11)
const transform241 = new Transform({
  position: new Vector3(19.5, 16, 54),
  rotation: new Quaternion(-1.5394204423504229e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(17.9999942779541, 1, 0.9999997019767761)
})
wallPlainBlack6.addComponentOrReplace(transform241)

const wallPlainBlack7 = new Entity('wallPlainBlack7')
engine.addEntity(wallPlainBlack7)
wallPlainBlack7.setParent(_scene)
wallPlainBlack7.addComponentOrReplace(gltfShape11)
const transform242 = new Transform({
  position: new Vector3(47.5, 16, 54),
  rotation: new Quaternion(-1.5394204423504229e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(17.9999942779541, 1, 0.9999997019767761)
})
wallPlainBlack7.addComponentOrReplace(transform242)

const wallPlainBlack8 = new Entity('wallPlainBlack8')
engine.addEntity(wallPlainBlack8)
wallPlainBlack8.setParent(_scene)
wallPlainBlack8.addComponentOrReplace(gltfShape11)
const transform243 = new Transform({
  position: new Vector3(47.5, 16, 39.5),
  rotation: new Quaternion(-1.5394204423504229e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(17.9999942779541, 1, 0.9999997019767761)
})
wallPlainBlack8.addComponentOrReplace(transform243)

const roofWhiteEdges2 = new Entity('roofWhiteEdges2')
engine.addEntity(roofWhiteEdges2)
roofWhiteEdges2.setParent(_scene)
const transform244 = new Transform({
  position: new Vector3(47.5, 16, 60),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8, 1, 15)
})
roofWhiteEdges2.addComponentOrReplace(transform244)
roofWhiteEdges2.addComponentOrReplace(gltfShape9)

const wallPlainBlack9 = new Entity('wallPlainBlack9')
engine.addEntity(wallPlainBlack9)
wallPlainBlack9.setParent(_scene)
wallPlainBlack9.addComponentOrReplace(gltfShape11)
const transform245 = new Transform({
  position: new Vector3(43.5, 16, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(11.999998092651367, 1, 0.9999998211860657)
})
wallPlainBlack9.addComponentOrReplace(transform245)

const wallPlainBlack10 = new Entity('wallPlainBlack10')
engine.addEntity(wallPlainBlack10)
wallPlainBlack10.setParent(_scene)
wallPlainBlack10.addComponentOrReplace(gltfShape11)
const transform246 = new Transform({
  position: new Vector3(47.5, 16, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.999999046325684, 1, 0.9999998807907104)
})
wallPlainBlack10.addComponentOrReplace(transform246)

const wallPlainBlack3 = new Entity('wallPlainBlack3')
engine.addEntity(wallPlainBlack3)
wallPlainBlack3.setParent(_scene)
wallPlainBlack3.addComponentOrReplace(gltfShape11)
const transform247 = new Transform({
  position: new Vector3(43.5, 16, 54),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(11.999998092651367, 1, 0.9999998211860657)
})
wallPlainBlack3.addComponentOrReplace(transform247)

const wallPlainBlack4 = new Entity('wallPlainBlack4')
engine.addEntity(wallPlainBlack4)
wallPlainBlack4.setParent(_scene)
wallPlainBlack4.addComponentOrReplace(gltfShape11)
const transform248 = new Transform({
  position: new Vector3(47.5, 16, 54),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(5.999999046325684, 1, 0.9999998807907104)
})
wallPlainBlack4.addComponentOrReplace(transform248)

const wallMetalBolts = new Entity('wallMetalBolts')
engine.addEntity(wallMetalBolts)
wallMetalBolts.setParent(_scene)
const transform249 = new Transform({
  position: new Vector3(64, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts.addComponentOrReplace(transform249)
const gltfShape12 = new GLTFShape("9a51cc2f-779d-4d10-92f8-9264f187dc30/MetalBoltsWall.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
wallMetalBolts.addComponentOrReplace(gltfShape12)

const wallMetalBolts2 = new Entity('wallMetalBolts2')
engine.addEntity(wallMetalBolts2)
wallMetalBolts2.setParent(_scene)
wallMetalBolts2.addComponentOrReplace(gltfShape12)
const transform250 = new Transform({
  position: new Vector3(63, 0, 0.5000001192092896),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts2.addComponentOrReplace(transform250)

const wallMetalBolts3 = new Entity('wallMetalBolts3')
engine.addEntity(wallMetalBolts3)
wallMetalBolts3.setParent(_scene)
wallMetalBolts3.addComponentOrReplace(gltfShape12)
const transform251 = new Transform({
  position: new Vector3(62, 0, 0.5000002384185791),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts3.addComponentOrReplace(transform251)

const wallMetalBolts4 = new Entity('wallMetalBolts4')
engine.addEntity(wallMetalBolts4)
wallMetalBolts4.setParent(_scene)
wallMetalBolts4.addComponentOrReplace(gltfShape12)
const transform252 = new Transform({
  position: new Vector3(61, 0, 0.5000003576278687),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts4.addComponentOrReplace(transform252)

const wallMetalBolts5 = new Entity('wallMetalBolts5')
engine.addEntity(wallMetalBolts5)
wallMetalBolts5.setParent(_scene)
wallMetalBolts5.addComponentOrReplace(gltfShape12)
const transform253 = new Transform({
  position: new Vector3(60, 0, 0.5000004768371582),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts5.addComponentOrReplace(transform253)

const wallMetalBolts6 = new Entity('wallMetalBolts6')
engine.addEntity(wallMetalBolts6)
wallMetalBolts6.setParent(_scene)
wallMetalBolts6.addComponentOrReplace(gltfShape12)
const transform254 = new Transform({
  position: new Vector3(59, 0, 0.5000005960464478),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts6.addComponentOrReplace(transform254)

const wallMetalBolts7 = new Entity('wallMetalBolts7')
engine.addEntity(wallMetalBolts7)
wallMetalBolts7.setParent(_scene)
wallMetalBolts7.addComponentOrReplace(gltfShape12)
const transform255 = new Transform({
  position: new Vector3(58, 0, 0.5000007152557373),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts7.addComponentOrReplace(transform255)

const wallMetalBolts8 = new Entity('wallMetalBolts8')
engine.addEntity(wallMetalBolts8)
wallMetalBolts8.setParent(_scene)
wallMetalBolts8.addComponentOrReplace(gltfShape12)
const transform256 = new Transform({
  position: new Vector3(57, 0, 0.5000008344650269),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts8.addComponentOrReplace(transform256)

const wallMetalBolts9 = new Entity('wallMetalBolts9')
engine.addEntity(wallMetalBolts9)
wallMetalBolts9.setParent(_scene)
wallMetalBolts9.addComponentOrReplace(gltfShape12)
const transform257 = new Transform({
  position: new Vector3(50, 0, 0.5000016689300537),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts9.addComponentOrReplace(transform257)

const wallMetalBolts10 = new Entity('wallMetalBolts10')
engine.addEntity(wallMetalBolts10)
wallMetalBolts10.setParent(_scene)
wallMetalBolts10.addComponentOrReplace(gltfShape12)
const transform258 = new Transform({
  position: new Vector3(49, 0, 0.5000017881393433),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts10.addComponentOrReplace(transform258)

const wallMetalBolts11 = new Entity('wallMetalBolts11')
engine.addEntity(wallMetalBolts11)
wallMetalBolts11.setParent(_scene)
wallMetalBolts11.addComponentOrReplace(gltfShape12)
const transform259 = new Transform({
  position: new Vector3(51, 0, 0.5000015497207642),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts11.addComponentOrReplace(transform259)

const wallMetalBolts12 = new Entity('wallMetalBolts12')
engine.addEntity(wallMetalBolts12)
wallMetalBolts12.setParent(_scene)
wallMetalBolts12.addComponentOrReplace(gltfShape12)
const transform260 = new Transform({
  position: new Vector3(52, 0, 0.5000014305114746),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts12.addComponentOrReplace(transform260)

const wallMetalBolts13 = new Entity('wallMetalBolts13')
engine.addEntity(wallMetalBolts13)
wallMetalBolts13.setParent(_scene)
wallMetalBolts13.addComponentOrReplace(gltfShape12)
const transform261 = new Transform({
  position: new Vector3(53, 0, 0.5000013113021851),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts13.addComponentOrReplace(transform261)

const wallMetalBolts14 = new Entity('wallMetalBolts14')
engine.addEntity(wallMetalBolts14)
wallMetalBolts14.setParent(_scene)
wallMetalBolts14.addComponentOrReplace(gltfShape12)
const transform262 = new Transform({
  position: new Vector3(54, 0, 0.5000011920928955),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts14.addComponentOrReplace(transform262)

const wallMetalBolts15 = new Entity('wallMetalBolts15')
engine.addEntity(wallMetalBolts15)
wallMetalBolts15.setParent(_scene)
wallMetalBolts15.addComponentOrReplace(gltfShape12)
const transform263 = new Transform({
  position: new Vector3(55, 0, 0.500001072883606),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts15.addComponentOrReplace(transform263)

const wallMetalBolts16 = new Entity('wallMetalBolts16')
engine.addEntity(wallMetalBolts16)
wallMetalBolts16.setParent(_scene)
wallMetalBolts16.addComponentOrReplace(gltfShape12)
const transform264 = new Transform({
  position: new Vector3(56, 0, 0.5000009536743164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts16.addComponentOrReplace(transform264)

const wallMetalBolts17 = new Entity('wallMetalBolts17')
engine.addEntity(wallMetalBolts17)
wallMetalBolts17.setParent(_scene)
wallMetalBolts17.addComponentOrReplace(gltfShape12)
const transform265 = new Transform({
  position: new Vector3(42, 0, 0.5000026226043701),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts17.addComponentOrReplace(transform265)

const wallMetalBolts18 = new Entity('wallMetalBolts18')
engine.addEntity(wallMetalBolts18)
wallMetalBolts18.setParent(_scene)
wallMetalBolts18.addComponentOrReplace(gltfShape12)
const transform266 = new Transform({
  position: new Vector3(41, 0, 0.5000027418136597),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts18.addComponentOrReplace(transform266)

const wallMetalBolts19 = new Entity('wallMetalBolts19')
engine.addEntity(wallMetalBolts19)
wallMetalBolts19.setParent(_scene)
wallMetalBolts19.addComponentOrReplace(gltfShape12)
const transform267 = new Transform({
  position: new Vector3(43, 0, 0.5000025033950806),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts19.addComponentOrReplace(transform267)

const wallMetalBolts20 = new Entity('wallMetalBolts20')
engine.addEntity(wallMetalBolts20)
wallMetalBolts20.setParent(_scene)
wallMetalBolts20.addComponentOrReplace(gltfShape12)
const transform268 = new Transform({
  position: new Vector3(44, 0, 0.500002384185791),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts20.addComponentOrReplace(transform268)

const wallMetalBolts21 = new Entity('wallMetalBolts21')
engine.addEntity(wallMetalBolts21)
wallMetalBolts21.setParent(_scene)
wallMetalBolts21.addComponentOrReplace(gltfShape12)
const transform269 = new Transform({
  position: new Vector3(45, 0, 0.5000022649765015),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts21.addComponentOrReplace(transform269)

const wallMetalBolts22 = new Entity('wallMetalBolts22')
engine.addEntity(wallMetalBolts22)
wallMetalBolts22.setParent(_scene)
wallMetalBolts22.addComponentOrReplace(gltfShape12)
const transform270 = new Transform({
  position: new Vector3(46, 0, 0.5000021457672119),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts22.addComponentOrReplace(transform270)

const wallMetalBolts23 = new Entity('wallMetalBolts23')
engine.addEntity(wallMetalBolts23)
wallMetalBolts23.setParent(_scene)
wallMetalBolts23.addComponentOrReplace(gltfShape12)
const transform271 = new Transform({
  position: new Vector3(47, 0, 0.5000020265579224),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts23.addComponentOrReplace(transform271)

const wallMetalBolts24 = new Entity('wallMetalBolts24')
engine.addEntity(wallMetalBolts24)
wallMetalBolts24.setParent(_scene)
wallMetalBolts24.addComponentOrReplace(gltfShape12)
const transform272 = new Transform({
  position: new Vector3(48, 0, 0.5000019073486328),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts24.addComponentOrReplace(transform272)

const wallMetalBolts25 = new Entity('wallMetalBolts25')
engine.addEntity(wallMetalBolts25)
wallMetalBolts25.setParent(_scene)
wallMetalBolts25.addComponentOrReplace(gltfShape12)
const transform273 = new Transform({
  position: new Vector3(34, 0, 0.5000035762786865),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts25.addComponentOrReplace(transform273)

const wallMetalBolts26 = new Entity('wallMetalBolts26')
engine.addEntity(wallMetalBolts26)
wallMetalBolts26.setParent(_scene)
wallMetalBolts26.addComponentOrReplace(gltfShape12)
const transform274 = new Transform({
  position: new Vector3(33, 0, 0.5000036954879761),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts26.addComponentOrReplace(transform274)

const wallMetalBolts27 = new Entity('wallMetalBolts27')
engine.addEntity(wallMetalBolts27)
wallMetalBolts27.setParent(_scene)
wallMetalBolts27.addComponentOrReplace(gltfShape12)
const transform275 = new Transform({
  position: new Vector3(35, 0, 0.500003457069397),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts27.addComponentOrReplace(transform275)

const wallMetalBolts28 = new Entity('wallMetalBolts28')
engine.addEntity(wallMetalBolts28)
wallMetalBolts28.setParent(_scene)
wallMetalBolts28.addComponentOrReplace(gltfShape12)
const transform276 = new Transform({
  position: new Vector3(36, 0, 0.5000033378601074),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts28.addComponentOrReplace(transform276)

const wallMetalBolts29 = new Entity('wallMetalBolts29')
engine.addEntity(wallMetalBolts29)
wallMetalBolts29.setParent(_scene)
wallMetalBolts29.addComponentOrReplace(gltfShape12)
const transform277 = new Transform({
  position: new Vector3(37, 0, 0.5000032186508179),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts29.addComponentOrReplace(transform277)

const wallMetalBolts30 = new Entity('wallMetalBolts30')
engine.addEntity(wallMetalBolts30)
wallMetalBolts30.setParent(_scene)
wallMetalBolts30.addComponentOrReplace(gltfShape12)
const transform278 = new Transform({
  position: new Vector3(38, 0, 0.5000030994415283),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts30.addComponentOrReplace(transform278)

const wallMetalBolts31 = new Entity('wallMetalBolts31')
engine.addEntity(wallMetalBolts31)
wallMetalBolts31.setParent(_scene)
wallMetalBolts31.addComponentOrReplace(gltfShape12)
const transform279 = new Transform({
  position: new Vector3(39, 0, 0.5000029802322388),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts31.addComponentOrReplace(transform279)

const wallMetalBolts32 = new Entity('wallMetalBolts32')
engine.addEntity(wallMetalBolts32)
wallMetalBolts32.setParent(_scene)
wallMetalBolts32.addComponentOrReplace(gltfShape12)
const transform280 = new Transform({
  position: new Vector3(40, 0, 0.5000028610229492),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts32.addComponentOrReplace(transform280)

const wallMetalBolts33 = new Entity('wallMetalBolts33')
engine.addEntity(wallMetalBolts33)
wallMetalBolts33.setParent(_scene)
wallMetalBolts33.addComponentOrReplace(gltfShape12)
const transform281 = new Transform({
  position: new Vector3(26, 0, 0.5000045299530029),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts33.addComponentOrReplace(transform281)

const wallMetalBolts34 = new Entity('wallMetalBolts34')
engine.addEntity(wallMetalBolts34)
wallMetalBolts34.setParent(_scene)
wallMetalBolts34.addComponentOrReplace(gltfShape12)
const transform282 = new Transform({
  position: new Vector3(25, 0, 0.5000046491622925),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts34.addComponentOrReplace(transform282)

const wallMetalBolts35 = new Entity('wallMetalBolts35')
engine.addEntity(wallMetalBolts35)
wallMetalBolts35.setParent(_scene)
wallMetalBolts35.addComponentOrReplace(gltfShape12)
const transform283 = new Transform({
  position: new Vector3(27, 0, 0.5000044107437134),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts35.addComponentOrReplace(transform283)

const wallMetalBolts36 = new Entity('wallMetalBolts36')
engine.addEntity(wallMetalBolts36)
wallMetalBolts36.setParent(_scene)
wallMetalBolts36.addComponentOrReplace(gltfShape12)
const transform284 = new Transform({
  position: new Vector3(28, 0, 0.5000042915344238),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts36.addComponentOrReplace(transform284)

const wallMetalBolts37 = new Entity('wallMetalBolts37')
engine.addEntity(wallMetalBolts37)
wallMetalBolts37.setParent(_scene)
wallMetalBolts37.addComponentOrReplace(gltfShape12)
const transform285 = new Transform({
  position: new Vector3(29, 0, 0.5000041723251343),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts37.addComponentOrReplace(transform285)

const wallMetalBolts38 = new Entity('wallMetalBolts38')
engine.addEntity(wallMetalBolts38)
wallMetalBolts38.setParent(_scene)
wallMetalBolts38.addComponentOrReplace(gltfShape12)
const transform286 = new Transform({
  position: new Vector3(30, 0, 0.5000040531158447),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts38.addComponentOrReplace(transform286)

const wallMetalBolts39 = new Entity('wallMetalBolts39')
engine.addEntity(wallMetalBolts39)
wallMetalBolts39.setParent(_scene)
wallMetalBolts39.addComponentOrReplace(gltfShape12)
const transform287 = new Transform({
  position: new Vector3(31, 0, 0.5000039339065552),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts39.addComponentOrReplace(transform287)

const wallMetalBolts40 = new Entity('wallMetalBolts40')
engine.addEntity(wallMetalBolts40)
wallMetalBolts40.setParent(_scene)
wallMetalBolts40.addComponentOrReplace(gltfShape12)
const transform288 = new Transform({
  position: new Vector3(32, 0, 0.5000038146972656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts40.addComponentOrReplace(transform288)

const wallMetalBolts41 = new Entity('wallMetalBolts41')
engine.addEntity(wallMetalBolts41)
wallMetalBolts41.setParent(_scene)
wallMetalBolts41.addComponentOrReplace(gltfShape12)
const transform289 = new Transform({
  position: new Vector3(18, 0, 0.5000054836273193),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts41.addComponentOrReplace(transform289)

const wallMetalBolts42 = new Entity('wallMetalBolts42')
engine.addEntity(wallMetalBolts42)
wallMetalBolts42.setParent(_scene)
wallMetalBolts42.addComponentOrReplace(gltfShape12)
const transform290 = new Transform({
  position: new Vector3(17, 0, 0.5000056028366089),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts42.addComponentOrReplace(transform290)

const wallMetalBolts43 = new Entity('wallMetalBolts43')
engine.addEntity(wallMetalBolts43)
wallMetalBolts43.setParent(_scene)
wallMetalBolts43.addComponentOrReplace(gltfShape12)
const transform291 = new Transform({
  position: new Vector3(19, 0, 0.5000053644180298),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts43.addComponentOrReplace(transform291)

const wallMetalBolts44 = new Entity('wallMetalBolts44')
engine.addEntity(wallMetalBolts44)
wallMetalBolts44.setParent(_scene)
wallMetalBolts44.addComponentOrReplace(gltfShape12)
const transform292 = new Transform({
  position: new Vector3(20, 0, 0.5000052452087402),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts44.addComponentOrReplace(transform292)

const wallMetalBolts45 = new Entity('wallMetalBolts45')
engine.addEntity(wallMetalBolts45)
wallMetalBolts45.setParent(_scene)
wallMetalBolts45.addComponentOrReplace(gltfShape12)
const transform293 = new Transform({
  position: new Vector3(21, 0, 0.5000051259994507),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts45.addComponentOrReplace(transform293)

const wallMetalBolts46 = new Entity('wallMetalBolts46')
engine.addEntity(wallMetalBolts46)
wallMetalBolts46.setParent(_scene)
wallMetalBolts46.addComponentOrReplace(gltfShape12)
const transform294 = new Transform({
  position: new Vector3(22, 0, 0.5000050067901611),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts46.addComponentOrReplace(transform294)

const wallMetalBolts47 = new Entity('wallMetalBolts47')
engine.addEntity(wallMetalBolts47)
wallMetalBolts47.setParent(_scene)
wallMetalBolts47.addComponentOrReplace(gltfShape12)
const transform295 = new Transform({
  position: new Vector3(23, 0, 0.5000048875808716),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts47.addComponentOrReplace(transform295)

const wallMetalBolts48 = new Entity('wallMetalBolts48')
engine.addEntity(wallMetalBolts48)
wallMetalBolts48.setParent(_scene)
wallMetalBolts48.addComponentOrReplace(gltfShape12)
const transform296 = new Transform({
  position: new Vector3(24, 0, 0.500004768371582),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts48.addComponentOrReplace(transform296)

const wallMetalBolts49 = new Entity('wallMetalBolts49')
engine.addEntity(wallMetalBolts49)
wallMetalBolts49.setParent(_scene)
wallMetalBolts49.addComponentOrReplace(gltfShape12)
const transform297 = new Transform({
  position: new Vector3(10, 0, 0.5000064373016357),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts49.addComponentOrReplace(transform297)

const wallMetalBolts50 = new Entity('wallMetalBolts50')
engine.addEntity(wallMetalBolts50)
wallMetalBolts50.setParent(_scene)
wallMetalBolts50.addComponentOrReplace(gltfShape12)
const transform298 = new Transform({
  position: new Vector3(9, 0, 0.5000065565109253),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts50.addComponentOrReplace(transform298)

const wallMetalBolts51 = new Entity('wallMetalBolts51')
engine.addEntity(wallMetalBolts51)
wallMetalBolts51.setParent(_scene)
wallMetalBolts51.addComponentOrReplace(gltfShape12)
const transform299 = new Transform({
  position: new Vector3(11, 0, 0.5000063180923462),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts51.addComponentOrReplace(transform299)

const wallMetalBolts52 = new Entity('wallMetalBolts52')
engine.addEntity(wallMetalBolts52)
wallMetalBolts52.setParent(_scene)
wallMetalBolts52.addComponentOrReplace(gltfShape12)
const transform300 = new Transform({
  position: new Vector3(12, 0, 0.5000061988830566),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts52.addComponentOrReplace(transform300)

const wallMetalBolts53 = new Entity('wallMetalBolts53')
engine.addEntity(wallMetalBolts53)
wallMetalBolts53.setParent(_scene)
wallMetalBolts53.addComponentOrReplace(gltfShape12)
const transform301 = new Transform({
  position: new Vector3(13, 0, 0.5000060796737671),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts53.addComponentOrReplace(transform301)

const wallMetalBolts54 = new Entity('wallMetalBolts54')
engine.addEntity(wallMetalBolts54)
wallMetalBolts54.setParent(_scene)
wallMetalBolts54.addComponentOrReplace(gltfShape12)
const transform302 = new Transform({
  position: new Vector3(14, 0, 0.5000059604644775),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts54.addComponentOrReplace(transform302)

const wallMetalBolts55 = new Entity('wallMetalBolts55')
engine.addEntity(wallMetalBolts55)
wallMetalBolts55.setParent(_scene)
wallMetalBolts55.addComponentOrReplace(gltfShape12)
const transform303 = new Transform({
  position: new Vector3(15, 0, 0.500005841255188),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts55.addComponentOrReplace(transform303)

const wallMetalBolts56 = new Entity('wallMetalBolts56')
engine.addEntity(wallMetalBolts56)
wallMetalBolts56.setParent(_scene)
wallMetalBolts56.addComponentOrReplace(gltfShape12)
const transform304 = new Transform({
  position: new Vector3(16, 0, 0.5000057220458984),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts56.addComponentOrReplace(transform304)

const wallMetalBolts57 = new Entity('wallMetalBolts57')
engine.addEntity(wallMetalBolts57)
wallMetalBolts57.setParent(_scene)
wallMetalBolts57.addComponentOrReplace(gltfShape12)
const transform305 = new Transform({
  position: new Vector3(2, 0, 0.5000073909759521),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts57.addComponentOrReplace(transform305)

const wallMetalBolts58 = new Entity('wallMetalBolts58')
engine.addEntity(wallMetalBolts58)
wallMetalBolts58.setParent(_scene)
wallMetalBolts58.addComponentOrReplace(gltfShape12)
const transform306 = new Transform({
  position: new Vector3(1, 0, 0.5000075101852417),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts58.addComponentOrReplace(transform306)

const wallMetalBolts59 = new Entity('wallMetalBolts59')
engine.addEntity(wallMetalBolts59)
wallMetalBolts59.setParent(_scene)
wallMetalBolts59.addComponentOrReplace(gltfShape12)
const transform307 = new Transform({
  position: new Vector3(3, 0, 0.5000072717666626),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts59.addComponentOrReplace(transform307)

const wallMetalBolts60 = new Entity('wallMetalBolts60')
engine.addEntity(wallMetalBolts60)
wallMetalBolts60.setParent(_scene)
wallMetalBolts60.addComponentOrReplace(gltfShape12)
const transform308 = new Transform({
  position: new Vector3(4, 0, 0.500007152557373),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts60.addComponentOrReplace(transform308)

const wallMetalBolts61 = new Entity('wallMetalBolts61')
engine.addEntity(wallMetalBolts61)
wallMetalBolts61.setParent(_scene)
wallMetalBolts61.addComponentOrReplace(gltfShape12)
const transform309 = new Transform({
  position: new Vector3(5, 0, 0.5000070333480835),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts61.addComponentOrReplace(transform309)

const wallMetalBolts62 = new Entity('wallMetalBolts62')
engine.addEntity(wallMetalBolts62)
wallMetalBolts62.setParent(_scene)
wallMetalBolts62.addComponentOrReplace(gltfShape12)
const transform310 = new Transform({
  position: new Vector3(6, 0, 0.500006914138794),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts62.addComponentOrReplace(transform310)

const wallMetalBolts63 = new Entity('wallMetalBolts63')
engine.addEntity(wallMetalBolts63)
wallMetalBolts63.setParent(_scene)
wallMetalBolts63.addComponentOrReplace(gltfShape12)
const transform311 = new Transform({
  position: new Vector3(7, 0, 0.5000067949295044),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts63.addComponentOrReplace(transform311)

const wallMetalBolts64 = new Entity('wallMetalBolts64')
engine.addEntity(wallMetalBolts64)
wallMetalBolts64.setParent(_scene)
wallMetalBolts64.addComponentOrReplace(gltfShape12)
const transform312 = new Transform({
  position: new Vector3(8, 0, 0.5000066757202148),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts64.addComponentOrReplace(transform312)

const wallMetalBolts65 = new Entity('wallMetalBolts65')
engine.addEntity(wallMetalBolts65)
wallMetalBolts65.setParent(_scene)
wallMetalBolts65.addComponentOrReplace(gltfShape12)
const transform313 = new Transform({
  position: new Vector3(55, 0, 0.500001072883606),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts65.addComponentOrReplace(transform313)

const wallMetalBolts66 = new Entity('wallMetalBolts66')
engine.addEntity(wallMetalBolts66)
wallMetalBolts66.setParent(_scene)
wallMetalBolts66.addComponentOrReplace(gltfShape12)
const transform314 = new Transform({
  position: new Vector3(56, 0, 0.5000009536743164),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts66.addComponentOrReplace(transform314)

const wallMetalBolts67 = new Entity('wallMetalBolts67')
engine.addEntity(wallMetalBolts67)
wallMetalBolts67.setParent(_scene)
wallMetalBolts67.addComponentOrReplace(gltfShape12)
const transform315 = new Transform({
  position: new Vector3(57, 0, 0.5000008344650269),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts67.addComponentOrReplace(transform315)

const wallMetalBolts68 = new Entity('wallMetalBolts68')
engine.addEntity(wallMetalBolts68)
wallMetalBolts68.setParent(_scene)
wallMetalBolts68.addComponentOrReplace(gltfShape12)
const transform316 = new Transform({
  position: new Vector3(58, 0, 0.5000007152557373),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts68.addComponentOrReplace(transform316)

const wallMetalBolts69 = new Entity('wallMetalBolts69')
engine.addEntity(wallMetalBolts69)
wallMetalBolts69.setParent(_scene)
wallMetalBolts69.addComponentOrReplace(gltfShape12)
const transform317 = new Transform({
  position: new Vector3(59, 0, 0.5000005960464478),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts69.addComponentOrReplace(transform317)

const wallMetalBolts70 = new Entity('wallMetalBolts70')
engine.addEntity(wallMetalBolts70)
wallMetalBolts70.setParent(_scene)
wallMetalBolts70.addComponentOrReplace(gltfShape12)
const transform318 = new Transform({
  position: new Vector3(60, 0, 0.5000004768371582),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts70.addComponentOrReplace(transform318)

const wallMetalBolts71 = new Entity('wallMetalBolts71')
engine.addEntity(wallMetalBolts71)
wallMetalBolts71.setParent(_scene)
wallMetalBolts71.addComponentOrReplace(gltfShape12)
const transform319 = new Transform({
  position: new Vector3(61, 0, 0.5000003576278687),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts71.addComponentOrReplace(transform319)

const wallMetalBolts72 = new Entity('wallMetalBolts72')
engine.addEntity(wallMetalBolts72)
wallMetalBolts72.setParent(_scene)
wallMetalBolts72.addComponentOrReplace(gltfShape12)
const transform320 = new Transform({
  position: new Vector3(62, 0, 0.5000002384185791),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts72.addComponentOrReplace(transform320)

const wallMetalBolts73 = new Entity('wallMetalBolts73')
engine.addEntity(wallMetalBolts73)
wallMetalBolts73.setParent(_scene)
wallMetalBolts73.addComponentOrReplace(gltfShape12)
const transform321 = new Transform({
  position: new Vector3(63, 0, 0.5000001192092896),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts73.addComponentOrReplace(transform321)

const wallMetalBolts74 = new Entity('wallMetalBolts74')
engine.addEntity(wallMetalBolts74)
wallMetalBolts74.setParent(_scene)
wallMetalBolts74.addComponentOrReplace(gltfShape12)
const transform322 = new Transform({
  position: new Vector3(64, 0, 0.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts74.addComponentOrReplace(transform322)

const wallMetalBolts75 = new Entity('wallMetalBolts75')
engine.addEntity(wallMetalBolts75)
wallMetalBolts75.setParent(_scene)
wallMetalBolts75.addComponentOrReplace(gltfShape12)
const transform323 = new Transform({
  position: new Vector3(54, 0, 0.5000011920928955),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts75.addComponentOrReplace(transform323)

const wallMetalBolts76 = new Entity('wallMetalBolts76')
engine.addEntity(wallMetalBolts76)
wallMetalBolts76.setParent(_scene)
wallMetalBolts76.addComponentOrReplace(gltfShape12)
const transform324 = new Transform({
  position: new Vector3(52, 0, 0.5000014305114746),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts76.addComponentOrReplace(transform324)

const wallMetalBolts77 = new Entity('wallMetalBolts77')
engine.addEntity(wallMetalBolts77)
wallMetalBolts77.setParent(_scene)
wallMetalBolts77.addComponentOrReplace(gltfShape12)
const transform325 = new Transform({
  position: new Vector3(53, 0, 0.5000013113021851),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts77.addComponentOrReplace(transform325)

const wallMetalBolts78 = new Entity('wallMetalBolts78')
engine.addEntity(wallMetalBolts78)
wallMetalBolts78.setParent(_scene)
wallMetalBolts78.addComponentOrReplace(gltfShape12)
const transform326 = new Transform({
  position: new Vector3(50, 0, 0.5000016689300537),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts78.addComponentOrReplace(transform326)

const wallMetalBolts79 = new Entity('wallMetalBolts79')
engine.addEntity(wallMetalBolts79)
wallMetalBolts79.setParent(_scene)
wallMetalBolts79.addComponentOrReplace(gltfShape12)
const transform327 = new Transform({
  position: new Vector3(51, 0, 0.5000015497207642),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts79.addComponentOrReplace(transform327)

const wallMetalBolts80 = new Entity('wallMetalBolts80')
engine.addEntity(wallMetalBolts80)
wallMetalBolts80.setParent(_scene)
wallMetalBolts80.addComponentOrReplace(gltfShape12)
const transform328 = new Transform({
  position: new Vector3(51, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts80.addComponentOrReplace(transform328)

const wallMetalBolts81 = new Entity('wallMetalBolts81')
engine.addEntity(wallMetalBolts81)
wallMetalBolts81.setParent(_scene)
wallMetalBolts81.addComponentOrReplace(gltfShape12)
const transform329 = new Transform({
  position: new Vector3(52, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts81.addComponentOrReplace(transform329)

const wallMetalBolts82 = new Entity('wallMetalBolts82')
engine.addEntity(wallMetalBolts82)
wallMetalBolts82.setParent(_scene)
wallMetalBolts82.addComponentOrReplace(gltfShape12)
const transform330 = new Transform({
  position: new Vector3(53, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts82.addComponentOrReplace(transform330)

const wallMetalBolts83 = new Entity('wallMetalBolts83')
engine.addEntity(wallMetalBolts83)
wallMetalBolts83.setParent(_scene)
wallMetalBolts83.addComponentOrReplace(gltfShape12)
const transform331 = new Transform({
  position: new Vector3(54, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts83.addComponentOrReplace(transform331)

const wallMetalBolts84 = new Entity('wallMetalBolts84')
engine.addEntity(wallMetalBolts84)
wallMetalBolts84.setParent(_scene)
wallMetalBolts84.addComponentOrReplace(gltfShape12)
const transform332 = new Transform({
  position: new Vector3(55, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts84.addComponentOrReplace(transform332)

const wallMetalBolts85 = new Entity('wallMetalBolts85')
engine.addEntity(wallMetalBolts85)
wallMetalBolts85.setParent(_scene)
wallMetalBolts85.addComponentOrReplace(gltfShape12)
const transform333 = new Transform({
  position: new Vector3(56, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts85.addComponentOrReplace(transform333)

const wallMetalBolts86 = new Entity('wallMetalBolts86')
engine.addEntity(wallMetalBolts86)
wallMetalBolts86.setParent(_scene)
wallMetalBolts86.addComponentOrReplace(gltfShape12)
const transform334 = new Transform({
  position: new Vector3(57, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts86.addComponentOrReplace(transform334)

const wallMetalBolts87 = new Entity('wallMetalBolts87')
engine.addEntity(wallMetalBolts87)
wallMetalBolts87.setParent(_scene)
wallMetalBolts87.addComponentOrReplace(gltfShape12)
const transform335 = new Transform({
  position: new Vector3(58, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts87.addComponentOrReplace(transform335)

const wallMetalBolts88 = new Entity('wallMetalBolts88')
engine.addEntity(wallMetalBolts88)
wallMetalBolts88.setParent(_scene)
wallMetalBolts88.addComponentOrReplace(gltfShape12)
const transform336 = new Transform({
  position: new Vector3(59, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts88.addComponentOrReplace(transform336)

const wallMetalBolts89 = new Entity('wallMetalBolts89')
engine.addEntity(wallMetalBolts89)
wallMetalBolts89.setParent(_scene)
wallMetalBolts89.addComponentOrReplace(gltfShape12)
const transform337 = new Transform({
  position: new Vector3(60, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts89.addComponentOrReplace(transform337)

const wallMetalBolts90 = new Entity('wallMetalBolts90')
engine.addEntity(wallMetalBolts90)
wallMetalBolts90.setParent(_scene)
wallMetalBolts90.addComponentOrReplace(gltfShape12)
const transform338 = new Transform({
  position: new Vector3(61, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts90.addComponentOrReplace(transform338)

const wallMetalBolts91 = new Entity('wallMetalBolts91')
engine.addEntity(wallMetalBolts91)
wallMetalBolts91.setParent(_scene)
wallMetalBolts91.addComponentOrReplace(gltfShape12)
const transform339 = new Transform({
  position: new Vector3(62, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts91.addComponentOrReplace(transform339)

const wallMetalBolts92 = new Entity('wallMetalBolts92')
engine.addEntity(wallMetalBolts92)
wallMetalBolts92.setParent(_scene)
wallMetalBolts92.addComponentOrReplace(gltfShape12)
const transform340 = new Transform({
  position: new Vector3(63, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts92.addComponentOrReplace(transform340)

const wallMetalBolts93 = new Entity('wallMetalBolts93')
engine.addEntity(wallMetalBolts93)
wallMetalBolts93.setParent(_scene)
wallMetalBolts93.addComponentOrReplace(gltfShape12)
const transform341 = new Transform({
  position: new Vector3(64, 0, 79.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.49999988079071045, 0.5, 0.9999990463256836)
})
wallMetalBolts93.addComponentOrReplace(transform341)

const wallMetalBolts104 = new Entity('wallMetalBolts104')
engine.addEntity(wallMetalBolts104)
wallMetalBolts104.setParent(_scene)
wallMetalBolts104.addComponentOrReplace(gltfShape12)
const transform342 = new Transform({
  position: new Vector3(63.5, 4.172324565843155e-7, 76.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000002384185791, 0.5, 0.9999997615814209)
})
wallMetalBolts104.addComponentOrReplace(transform342)

const wallMetalBolts105 = new Entity('wallMetalBolts105')
engine.addEntity(wallMetalBolts105)
wallMetalBolts105.setParent(_scene)
wallMetalBolts105.addComponentOrReplace(gltfShape12)
const transform343 = new Transform({
  position: new Vector3(63.5, 5.364417461350968e-7, 77.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000002384185791, 0.5, 0.9999997615814209)
})
wallMetalBolts105.addComponentOrReplace(transform343)

const wallMetalBolts106 = new Entity('wallMetalBolts106')
engine.addEntity(wallMetalBolts106)
wallMetalBolts106.setParent(_scene)
wallMetalBolts106.addComponentOrReplace(gltfShape12)
const transform344 = new Transform({
  position: new Vector3(63.5, 6.55651035685878e-7, 78.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000002384185791, 0.5, 0.9999997615814209)
})
wallMetalBolts106.addComponentOrReplace(transform344)

const wallMetalBolts107 = new Entity('wallMetalBolts107')
engine.addEntity(wallMetalBolts107)
wallMetalBolts107.setParent(_scene)
wallMetalBolts107.addComponentOrReplace(gltfShape12)
const transform345 = new Transform({
  position: new Vector3(63.5, 7.748602683932404e-7, 79.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000002384185791, 0.5, 0.9999997615814209)
})
wallMetalBolts107.addComponentOrReplace(transform345)

const wallMetalBolts108 = new Entity('wallMetalBolts108')
engine.addEntity(wallMetalBolts108)
wallMetalBolts108.setParent(_scene)
wallMetalBolts108.addComponentOrReplace(gltfShape12)
const transform346 = new Transform({
  position: new Vector3(63.5, 7.748602683932404e-7, 14.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts108.addComponentOrReplace(transform346)

const wallMetalBolts109 = new Entity('wallMetalBolts109')
engine.addEntity(wallMetalBolts109)
wallMetalBolts109.setParent(_scene)
wallMetalBolts109.addComponentOrReplace(gltfShape12)
const transform347 = new Transform({
  position: new Vector3(63.5, 6.55651035685878e-7, 13.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts109.addComponentOrReplace(transform347)

const wallMetalBolts110 = new Entity('wallMetalBolts110')
engine.addEntity(wallMetalBolts110)
wallMetalBolts110.setParent(_scene)
wallMetalBolts110.addComponentOrReplace(gltfShape12)
const transform348 = new Transform({
  position: new Vector3(63.5, 5.364417461350968e-7, 12.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts110.addComponentOrReplace(transform348)

const wallMetalBolts111 = new Entity('wallMetalBolts111')
engine.addEntity(wallMetalBolts111)
wallMetalBolts111.setParent(_scene)
wallMetalBolts111.addComponentOrReplace(gltfShape12)
const transform349 = new Transform({
  position: new Vector3(63.5, 2.980231954552437e-7, 10.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts111.addComponentOrReplace(transform349)

const wallMetalBolts112 = new Entity('wallMetalBolts112')
engine.addEntity(wallMetalBolts112)
wallMetalBolts112.setParent(_scene)
wallMetalBolts112.addComponentOrReplace(gltfShape12)
const transform350 = new Transform({
  position: new Vector3(63.5, 4.172324565843155e-7, 11.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts112.addComponentOrReplace(transform350)

const wallMetalBolts113 = new Entity('wallMetalBolts113')
engine.addEntity(wallMetalBolts113)
wallMetalBolts113.setParent(_scene)
wallMetalBolts113.addComponentOrReplace(gltfShape12)
const transform351 = new Transform({
  position: new Vector3(63.5, 1.7881390590446244e-7, 9.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts113.addComponentOrReplace(transform351)

const wallMetalBolts114 = new Entity('wallMetalBolts114')
engine.addEntity(wallMetalBolts114)
wallMetalBolts114.setParent(_scene)
wallMetalBolts114.addComponentOrReplace(gltfShape12)
const transform352 = new Transform({
  position: new Vector3(63.5, 0, 7.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts114.addComponentOrReplace(transform352)

const wallMetalBolts115 = new Entity('wallMetalBolts115')
engine.addEntity(wallMetalBolts115)
wallMetalBolts115.setParent(_scene)
wallMetalBolts115.addComponentOrReplace(gltfShape12)
const transform353 = new Transform({
  position: new Vector3(63.5, 5.960464477539063e-8, 8.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts115.addComponentOrReplace(transform353)

const wallMetalBolts116 = new Entity('wallMetalBolts116')
engine.addEntity(wallMetalBolts116)
wallMetalBolts116.setParent(_scene)
wallMetalBolts116.addComponentOrReplace(gltfShape12)
const transform354 = new Transform({
  position: new Vector3(63.5, 0, 5.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts116.addComponentOrReplace(transform354)

const wallMetalBolts117 = new Entity('wallMetalBolts117')
engine.addEntity(wallMetalBolts117)
wallMetalBolts117.setParent(_scene)
wallMetalBolts117.addComponentOrReplace(gltfShape12)
const transform355 = new Transform({
  position: new Vector3(63.5, 0, 6.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts117.addComponentOrReplace(transform355)

const wallMetalBolts118 = new Entity('wallMetalBolts118')
engine.addEntity(wallMetalBolts118)
wallMetalBolts118.setParent(_scene)
wallMetalBolts118.addComponentOrReplace(gltfShape12)
const transform356 = new Transform({
  position: new Vector3(63.5, 0, 3.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts118.addComponentOrReplace(transform356)

const wallMetalBolts119 = new Entity('wallMetalBolts119')
engine.addEntity(wallMetalBolts119)
wallMetalBolts119.setParent(_scene)
wallMetalBolts119.addComponentOrReplace(gltfShape12)
const transform357 = new Transform({
  position: new Vector3(63.5, 0, 4.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts119.addComponentOrReplace(transform357)

const wallMetalBolts120 = new Entity('wallMetalBolts120')
engine.addEntity(wallMetalBolts120)
wallMetalBolts120.setParent(_scene)
wallMetalBolts120.addComponentOrReplace(gltfShape12)
const transform358 = new Transform({
  position: new Vector3(63.5, 0, 2.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts120.addComponentOrReplace(transform358)

const wallMetalBolts121 = new Entity('wallMetalBolts121')
engine.addEntity(wallMetalBolts121)
wallMetalBolts121.setParent(_scene)
wallMetalBolts121.addComponentOrReplace(gltfShape12)
const transform359 = new Transform({
  position: new Vector3(63.5, 0, 1.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000004768371582, 0.5, 1.000000238418579)
})
wallMetalBolts121.addComponentOrReplace(transform359)

const wallMetalBolts122 = new Entity('wallMetalBolts122')
engine.addEntity(wallMetalBolts122)
wallMetalBolts122.setParent(_scene)
wallMetalBolts122.addComponentOrReplace(gltfShape12)
const transform360 = new Transform({
  position: new Vector3(63.5, 0, 15.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts122.addComponentOrReplace(transform360)

const wallMetalBolts123 = new Entity('wallMetalBolts123')
engine.addEntity(wallMetalBolts123)
wallMetalBolts123.setParent(_scene)
wallMetalBolts123.addComponentOrReplace(gltfShape12)
const transform361 = new Transform({
  position: new Vector3(63.5, 0, 16.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts123.addComponentOrReplace(transform361)

const wallMetalBolts124 = new Entity('wallMetalBolts124')
engine.addEntity(wallMetalBolts124)
wallMetalBolts124.setParent(_scene)
wallMetalBolts124.addComponentOrReplace(gltfShape12)
const transform362 = new Transform({
  position: new Vector3(63.5, 0, 17.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts124.addComponentOrReplace(transform362)

const wallMetalBolts125 = new Entity('wallMetalBolts125')
engine.addEntity(wallMetalBolts125)
wallMetalBolts125.setParent(_scene)
wallMetalBolts125.addComponentOrReplace(gltfShape12)
const transform363 = new Transform({
  position: new Vector3(63.5, 0, 18.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts125.addComponentOrReplace(transform363)

const wallMetalBolts126 = new Entity('wallMetalBolts126')
engine.addEntity(wallMetalBolts126)
wallMetalBolts126.setParent(_scene)
wallMetalBolts126.addComponentOrReplace(gltfShape12)
const transform364 = new Transform({
  position: new Vector3(63.5, 0, 19.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts126.addComponentOrReplace(transform364)

const wallMetalBolts127 = new Entity('wallMetalBolts127')
engine.addEntity(wallMetalBolts127)
wallMetalBolts127.setParent(_scene)
wallMetalBolts127.addComponentOrReplace(gltfShape12)
const transform365 = new Transform({
  position: new Vector3(63.5, 0, 20.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts127.addComponentOrReplace(transform365)

const wallMetalBolts128 = new Entity('wallMetalBolts128')
engine.addEntity(wallMetalBolts128)
wallMetalBolts128.setParent(_scene)
wallMetalBolts128.addComponentOrReplace(gltfShape12)
const transform366 = new Transform({
  position: new Vector3(63.5, 0, 21.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts128.addComponentOrReplace(transform366)

const wallMetalBolts129 = new Entity('wallMetalBolts129')
engine.addEntity(wallMetalBolts129)
wallMetalBolts129.setParent(_scene)
wallMetalBolts129.addComponentOrReplace(gltfShape12)
const transform367 = new Transform({
  position: new Vector3(63.5, 5.960464477539063e-8, 22.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts129.addComponentOrReplace(transform367)

const wallMetalBolts130 = new Entity('wallMetalBolts130')
engine.addEntity(wallMetalBolts130)
wallMetalBolts130.setParent(_scene)
wallMetalBolts130.addComponentOrReplace(gltfShape12)
const transform368 = new Transform({
  position: new Vector3(63.5, 1.7881390590446244e-7, 23.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts130.addComponentOrReplace(transform368)

const wallMetalBolts131 = new Entity('wallMetalBolts131')
engine.addEntity(wallMetalBolts131)
wallMetalBolts131.setParent(_scene)
wallMetalBolts131.addComponentOrReplace(gltfShape12)
const transform369 = new Transform({
  position: new Vector3(63.5, 2.980231954552437e-7, 24.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts131.addComponentOrReplace(transform369)

const wallMetalBolts132 = new Entity('wallMetalBolts132')
engine.addEntity(wallMetalBolts132)
wallMetalBolts132.setParent(_scene)
wallMetalBolts132.addComponentOrReplace(gltfShape12)
const transform370 = new Transform({
  position: new Vector3(63.5, 4.172324565843155e-7, 25.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts132.addComponentOrReplace(transform370)

const wallMetalBolts133 = new Entity('wallMetalBolts133')
engine.addEntity(wallMetalBolts133)
wallMetalBolts133.setParent(_scene)
wallMetalBolts133.addComponentOrReplace(gltfShape12)
const transform371 = new Transform({
  position: new Vector3(63.5, 5.364417461350968e-7, 26.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts133.addComponentOrReplace(transform371)

const wallMetalBolts134 = new Entity('wallMetalBolts134')
engine.addEntity(wallMetalBolts134)
wallMetalBolts134.setParent(_scene)
wallMetalBolts134.addComponentOrReplace(gltfShape12)
const transform372 = new Transform({
  position: new Vector3(63.5, 6.55651035685878e-7, 27.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts134.addComponentOrReplace(transform372)

const wallMetalBolts135 = new Entity('wallMetalBolts135')
engine.addEntity(wallMetalBolts135)
wallMetalBolts135.setParent(_scene)
wallMetalBolts135.addComponentOrReplace(gltfShape12)
const transform373 = new Transform({
  position: new Vector3(63.5, 7.748602683932404e-7, 28.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000005960464478, 0.5, 1.0000004768371582)
})
wallMetalBolts135.addComponentOrReplace(transform373)

const wallMetalBolts136 = new Entity('wallMetalBolts136')
engine.addEntity(wallMetalBolts136)
wallMetalBolts136.setParent(_scene)
wallMetalBolts136.addComponentOrReplace(gltfShape12)
const transform374 = new Transform({
  position: new Vector3(63.5, 0, 29.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts136.addComponentOrReplace(transform374)

const wallMetalBolts137 = new Entity('wallMetalBolts137')
engine.addEntity(wallMetalBolts137)
wallMetalBolts137.setParent(_scene)
wallMetalBolts137.addComponentOrReplace(gltfShape12)
const transform375 = new Transform({
  position: new Vector3(63.5, 0, 30.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts137.addComponentOrReplace(transform375)

const wallMetalBolts138 = new Entity('wallMetalBolts138')
engine.addEntity(wallMetalBolts138)
wallMetalBolts138.setParent(_scene)
wallMetalBolts138.addComponentOrReplace(gltfShape12)
const transform376 = new Transform({
  position: new Vector3(63.5, 0, 31.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts138.addComponentOrReplace(transform376)

const wallMetalBolts139 = new Entity('wallMetalBolts139')
engine.addEntity(wallMetalBolts139)
wallMetalBolts139.setParent(_scene)
wallMetalBolts139.addComponentOrReplace(gltfShape12)
const transform377 = new Transform({
  position: new Vector3(63.5, 0, 32.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts139.addComponentOrReplace(transform377)

const wallMetalBolts140 = new Entity('wallMetalBolts140')
engine.addEntity(wallMetalBolts140)
wallMetalBolts140.setParent(_scene)
wallMetalBolts140.addComponentOrReplace(gltfShape12)
const transform378 = new Transform({
  position: new Vector3(63.5, 0, 33.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts140.addComponentOrReplace(transform378)

const wallMetalBolts141 = new Entity('wallMetalBolts141')
engine.addEntity(wallMetalBolts141)
wallMetalBolts141.setParent(_scene)
wallMetalBolts141.addComponentOrReplace(gltfShape12)
const transform379 = new Transform({
  position: new Vector3(63.5, 0, 34.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts141.addComponentOrReplace(transform379)

const wallMetalBolts142 = new Entity('wallMetalBolts142')
engine.addEntity(wallMetalBolts142)
wallMetalBolts142.setParent(_scene)
wallMetalBolts142.addComponentOrReplace(gltfShape12)
const transform380 = new Transform({
  position: new Vector3(63.5, 0, 35.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts142.addComponentOrReplace(transform380)

const wallMetalBolts143 = new Entity('wallMetalBolts143')
engine.addEntity(wallMetalBolts143)
wallMetalBolts143.setParent(_scene)
wallMetalBolts143.addComponentOrReplace(gltfShape12)
const transform381 = new Transform({
  position: new Vector3(63.5, 5.960464477539063e-8, 36.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts143.addComponentOrReplace(transform381)

const wallMetalBolts144 = new Entity('wallMetalBolts144')
engine.addEntity(wallMetalBolts144)
wallMetalBolts144.setParent(_scene)
wallMetalBolts144.addComponentOrReplace(gltfShape12)
const transform382 = new Transform({
  position: new Vector3(63.5, 1.7881390590446244e-7, 37.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts144.addComponentOrReplace(transform382)

const wallMetalBolts145 = new Entity('wallMetalBolts145')
engine.addEntity(wallMetalBolts145)
wallMetalBolts145.setParent(_scene)
wallMetalBolts145.addComponentOrReplace(gltfShape12)
const transform383 = new Transform({
  position: new Vector3(63.5, 2.980231954552437e-7, 38.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts145.addComponentOrReplace(transform383)

const wallMetalBolts146 = new Entity('wallMetalBolts146')
engine.addEntity(wallMetalBolts146)
wallMetalBolts146.setParent(_scene)
wallMetalBolts146.addComponentOrReplace(gltfShape12)
const transform384 = new Transform({
  position: new Vector3(63.5, 4.172324565843155e-7, 39.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts146.addComponentOrReplace(transform384)

const wallMetalBolts147 = new Entity('wallMetalBolts147')
engine.addEntity(wallMetalBolts147)
wallMetalBolts147.setParent(_scene)
wallMetalBolts147.addComponentOrReplace(gltfShape12)
const transform385 = new Transform({
  position: new Vector3(63.5, 5.364417461350968e-7, 40.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts147.addComponentOrReplace(transform385)

const wallMetalBolts148 = new Entity('wallMetalBolts148')
engine.addEntity(wallMetalBolts148)
wallMetalBolts148.setParent(_scene)
wallMetalBolts148.addComponentOrReplace(gltfShape12)
const transform386 = new Transform({
  position: new Vector3(63.5, 6.55651035685878e-7, 41.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts148.addComponentOrReplace(transform386)

const wallMetalBolts149 = new Entity('wallMetalBolts149')
engine.addEntity(wallMetalBolts149)
wallMetalBolts149.setParent(_scene)
wallMetalBolts149.addComponentOrReplace(gltfShape12)
const transform387 = new Transform({
  position: new Vector3(63.5, 7.748602683932404e-7, 42.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000007152557373, 0.5, 1.0000007152557373)
})
wallMetalBolts149.addComponentOrReplace(transform387)

const wallMetalBolts150 = new Entity('wallMetalBolts150')
engine.addEntity(wallMetalBolts150)
wallMetalBolts150.setParent(_scene)
wallMetalBolts150.addComponentOrReplace(gltfShape12)
const transform388 = new Transform({
  position: new Vector3(63.5, 0, 43.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts150.addComponentOrReplace(transform388)

const wallMetalBolts151 = new Entity('wallMetalBolts151')
engine.addEntity(wallMetalBolts151)
wallMetalBolts151.setParent(_scene)
wallMetalBolts151.addComponentOrReplace(gltfShape12)
const transform389 = new Transform({
  position: new Vector3(63.5, 0, 44.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts151.addComponentOrReplace(transform389)

const wallMetalBolts152 = new Entity('wallMetalBolts152')
engine.addEntity(wallMetalBolts152)
wallMetalBolts152.setParent(_scene)
wallMetalBolts152.addComponentOrReplace(gltfShape12)
const transform390 = new Transform({
  position: new Vector3(63.5, 0, 45.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts152.addComponentOrReplace(transform390)

const wallMetalBolts153 = new Entity('wallMetalBolts153')
engine.addEntity(wallMetalBolts153)
wallMetalBolts153.setParent(_scene)
wallMetalBolts153.addComponentOrReplace(gltfShape12)
const transform391 = new Transform({
  position: new Vector3(63.5, 0, 46.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts153.addComponentOrReplace(transform391)

const wallMetalBolts154 = new Entity('wallMetalBolts154')
engine.addEntity(wallMetalBolts154)
wallMetalBolts154.setParent(_scene)
wallMetalBolts154.addComponentOrReplace(gltfShape12)
const transform392 = new Transform({
  position: new Vector3(63.5, 0, 47.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts154.addComponentOrReplace(transform392)

const wallMetalBolts155 = new Entity('wallMetalBolts155')
engine.addEntity(wallMetalBolts155)
wallMetalBolts155.setParent(_scene)
wallMetalBolts155.addComponentOrReplace(gltfShape12)
const transform393 = new Transform({
  position: new Vector3(63.5, 0, 48.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts155.addComponentOrReplace(transform393)

const wallMetalBolts156 = new Entity('wallMetalBolts156')
engine.addEntity(wallMetalBolts156)
wallMetalBolts156.setParent(_scene)
wallMetalBolts156.addComponentOrReplace(gltfShape12)
const transform394 = new Transform({
  position: new Vector3(63.5, 0, 49.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts156.addComponentOrReplace(transform394)

const wallMetalBolts157 = new Entity('wallMetalBolts157')
engine.addEntity(wallMetalBolts157)
wallMetalBolts157.setParent(_scene)
wallMetalBolts157.addComponentOrReplace(gltfShape12)
const transform395 = new Transform({
  position: new Vector3(63.5, 5.960464477539063e-8, 50.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts157.addComponentOrReplace(transform395)

const wallMetalBolts158 = new Entity('wallMetalBolts158')
engine.addEntity(wallMetalBolts158)
wallMetalBolts158.setParent(_scene)
wallMetalBolts158.addComponentOrReplace(gltfShape12)
const transform396 = new Transform({
  position: new Vector3(63.5, 1.7881390590446244e-7, 51.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts158.addComponentOrReplace(transform396)

const wallMetalBolts159 = new Entity('wallMetalBolts159')
engine.addEntity(wallMetalBolts159)
wallMetalBolts159.setParent(_scene)
wallMetalBolts159.addComponentOrReplace(gltfShape12)
const transform397 = new Transform({
  position: new Vector3(63.5, 2.980231954552437e-7, 52.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts159.addComponentOrReplace(transform397)

const wallMetalBolts160 = new Entity('wallMetalBolts160')
engine.addEntity(wallMetalBolts160)
wallMetalBolts160.setParent(_scene)
wallMetalBolts160.addComponentOrReplace(gltfShape12)
const transform398 = new Transform({
  position: new Vector3(63.5, 4.172324565843155e-7, 53.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts160.addComponentOrReplace(transform398)

const wallMetalBolts161 = new Entity('wallMetalBolts161')
engine.addEntity(wallMetalBolts161)
wallMetalBolts161.setParent(_scene)
wallMetalBolts161.addComponentOrReplace(gltfShape12)
const transform399 = new Transform({
  position: new Vector3(63.5, 5.364417461350968e-7, 54.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts161.addComponentOrReplace(transform399)

const wallMetalBolts162 = new Entity('wallMetalBolts162')
engine.addEntity(wallMetalBolts162)
wallMetalBolts162.setParent(_scene)
wallMetalBolts162.addComponentOrReplace(gltfShape12)
const transform400 = new Transform({
  position: new Vector3(63.5, 6.55651035685878e-7, 55.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts162.addComponentOrReplace(transform400)

const wallMetalBolts163 = new Entity('wallMetalBolts163')
engine.addEntity(wallMetalBolts163)
wallMetalBolts163.setParent(_scene)
wallMetalBolts163.addComponentOrReplace(gltfShape12)
const transform401 = new Transform({
  position: new Vector3(63.5, 7.748602683932404e-7, 56.5),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000008344650269, 0.5, 1.0000009536743164)
})
wallMetalBolts163.addComponentOrReplace(transform401)

const wallMetalBolts164 = new Entity('wallMetalBolts164')
engine.addEntity(wallMetalBolts164)
wallMetalBolts164.setParent(_scene)
wallMetalBolts164.addComponentOrReplace(gltfShape12)
const transform402 = new Transform({
  position: new Vector3(63.5, 0, 57),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000003576278687, 0.5, 1)
})
wallMetalBolts164.addComponentOrReplace(transform402)

const wallMetalBolts165 = new Entity('wallMetalBolts165')
engine.addEntity(wallMetalBolts165)
wallMetalBolts165.setParent(_scene)
wallMetalBolts165.addComponentOrReplace(gltfShape12)
const transform403 = new Transform({
  position: new Vector3(63.5, 0, 58),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000003576278687, 0.5, 1)
})
wallMetalBolts165.addComponentOrReplace(transform403)

const wallMetalBolts166 = new Entity('wallMetalBolts166')
engine.addEntity(wallMetalBolts166)
wallMetalBolts166.setParent(_scene)
wallMetalBolts166.addComponentOrReplace(gltfShape12)
const transform404 = new Transform({
  position: new Vector3(63.5, 0, 59),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000003576278687, 0.5, 1)
})
wallMetalBolts166.addComponentOrReplace(transform404)

const wallMetalBolts167 = new Entity('wallMetalBolts167')
engine.addEntity(wallMetalBolts167)
wallMetalBolts167.setParent(_scene)
wallMetalBolts167.addComponentOrReplace(gltfShape12)
const transform405 = new Transform({
  position: new Vector3(63.5, 0, 60),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000003576278687, 0.5, 1)
})
wallMetalBolts167.addComponentOrReplace(transform405)

const wallMetalBolts168 = new Entity('wallMetalBolts168')
engine.addEntity(wallMetalBolts168)
wallMetalBolts168.setParent(_scene)
wallMetalBolts168.addComponentOrReplace(gltfShape12)
const transform406 = new Transform({
  position: new Vector3(63.5, 0, 61),
  rotation: new Quaternion(-9.13833247727445e-16, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.5000003576278687, 0.5, 1)
})
wallMetalBolts168.addComponentOrReplace(transform406)

const wallPlainGlass88 = new Entity('wallPlainGlass88')
engine.addEntity(wallPlainGlass88)
wallPlainGlass88.setParent(_scene)
const transform407 = new Transform({
  position: new Vector3(48.5, 3, 53.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 1.5, -1)
})
wallPlainGlass88.addComponentOrReplace(transform407)
wallPlainGlass88.addComponentOrReplace(gltfShape8)

const wallPlainGlass89 = new Entity('wallPlainGlass89')
engine.addEntity(wallPlainGlass89)
wallPlainGlass89.setParent(_scene)
wallPlainGlass89.addComponentOrReplace(gltfShape8)
const transform408 = new Transform({
  position: new Vector3(48.5, 8.5, 53.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 0.75, -1)
})
wallPlainGlass89.addComponentOrReplace(transform408)

const wallPlainGlass90 = new Entity('wallPlainGlass90')
engine.addEntity(wallPlainGlass90)
wallPlainGlass90.setParent(_scene)
wallPlainGlass90.addComponentOrReplace(gltfShape8)
const transform409 = new Transform({
  position: new Vector3(48.5, 8.5, 50.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 0.75, -1)
})
wallPlainGlass90.addComponentOrReplace(transform409)

const wallPlainGlass91 = new Entity('wallPlainGlass91')
engine.addEntity(wallPlainGlass91)
wallPlainGlass91.setParent(_scene)
wallPlainGlass91.addComponentOrReplace(gltfShape8)
const transform410 = new Transform({
  position: new Vector3(48.5, 3, 50.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 1.5, -1)
})
wallPlainGlass91.addComponentOrReplace(transform410)

const wallPlainGlass92 = new Entity('wallPlainGlass92')
engine.addEntity(wallPlainGlass92)
wallPlainGlass92.setParent(_scene)
wallPlainGlass92.addComponentOrReplace(gltfShape8)
const transform411 = new Transform({
  position: new Vector3(48.5, 8.5, 44.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 0.75, -1)
})
wallPlainGlass92.addComponentOrReplace(transform411)

const wallPlainGlass93 = new Entity('wallPlainGlass93')
engine.addEntity(wallPlainGlass93)
wallPlainGlass93.setParent(_scene)
wallPlainGlass93.addComponentOrReplace(gltfShape8)
const transform412 = new Transform({
  position: new Vector3(48.5, 3, 44.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 1.5, -1)
})
wallPlainGlass93.addComponentOrReplace(transform412)

const wallPlainGlass94 = new Entity('wallPlainGlass94')
engine.addEntity(wallPlainGlass94)
wallPlainGlass94.setParent(_scene)
wallPlainGlass94.addComponentOrReplace(gltfShape8)
const transform413 = new Transform({
  position: new Vector3(48.5, 8.5, 47.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 0.75, -1)
})
wallPlainGlass94.addComponentOrReplace(transform413)

const wallPlainGlass95 = new Entity('wallPlainGlass95')
engine.addEntity(wallPlainGlass95)
wallPlainGlass95.setParent(_scene)
wallPlainGlass95.addComponentOrReplace(gltfShape8)
const transform414 = new Transform({
  position: new Vector3(48.5, 3, 47.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 1.5, -1)
})
wallPlainGlass95.addComponentOrReplace(transform414)

const wallPlainGlass96 = new Entity('wallPlainGlass96')
engine.addEntity(wallPlainGlass96)
wallPlainGlass96.setParent(_scene)
wallPlainGlass96.addComponentOrReplace(gltfShape8)
const transform415 = new Transform({
  position: new Vector3(48.5, 8.5, 38.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 0.75, -1)
})
wallPlainGlass96.addComponentOrReplace(transform415)

const wallPlainGlass97 = new Entity('wallPlainGlass97')
engine.addEntity(wallPlainGlass97)
wallPlainGlass97.setParent(_scene)
wallPlainGlass97.addComponentOrReplace(gltfShape8)
const transform416 = new Transform({
  position: new Vector3(48.5, 3, 38.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 1.5, -1)
})
wallPlainGlass97.addComponentOrReplace(transform416)

const wallPlainGlass98 = new Entity('wallPlainGlass98')
engine.addEntity(wallPlainGlass98)
wallPlainGlass98.setParent(_scene)
wallPlainGlass98.addComponentOrReplace(gltfShape8)
const transform417 = new Transform({
  position: new Vector3(48.5, 8.5, 41.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 0.75, -1)
})
wallPlainGlass98.addComponentOrReplace(transform417)

const wallPlainGlass99 = new Entity('wallPlainGlass99')
engine.addEntity(wallPlainGlass99)
wallPlainGlass99.setParent(_scene)
wallPlainGlass99.addComponentOrReplace(gltfShape8)
const transform418 = new Transform({
  position: new Vector3(48.5, 3, 41.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 1.5, -1)
})
wallPlainGlass99.addComponentOrReplace(transform418)

const wallPlainGlass100 = new Entity('wallPlainGlass100')
engine.addEntity(wallPlainGlass100)
wallPlainGlass100.setParent(_scene)
wallPlainGlass100.addComponentOrReplace(gltfShape8)
const transform419 = new Transform({
  position: new Vector3(48.5, 8.5, 32.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 0.75, -1)
})
wallPlainGlass100.addComponentOrReplace(transform419)

const wallPlainGlass101 = new Entity('wallPlainGlass101')
engine.addEntity(wallPlainGlass101)
wallPlainGlass101.setParent(_scene)
wallPlainGlass101.addComponentOrReplace(gltfShape8)
const transform420 = new Transform({
  position: new Vector3(48.5, 3, 32.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 1.5, -1)
})
wallPlainGlass101.addComponentOrReplace(transform420)

const wallPlainGlass102 = new Entity('wallPlainGlass102')
engine.addEntity(wallPlainGlass102)
wallPlainGlass102.setParent(_scene)
wallPlainGlass102.addComponentOrReplace(gltfShape8)
const transform421 = new Transform({
  position: new Vector3(48.5, 8.5, 35.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 0.75, -1)
})
wallPlainGlass102.addComponentOrReplace(transform421)

const wallPlainGlass103 = new Entity('wallPlainGlass103')
engine.addEntity(wallPlainGlass103)
wallPlainGlass103.setParent(_scene)
wallPlainGlass103.addComponentOrReplace(gltfShape8)
const transform422 = new Transform({
  position: new Vector3(48.5, 3, 35.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 1.5, -1)
})
wallPlainGlass103.addComponentOrReplace(transform422)

const wallPlainGlass104 = new Entity('wallPlainGlass104')
engine.addEntity(wallPlainGlass104)
wallPlainGlass104.setParent(_scene)
wallPlainGlass104.addComponentOrReplace(gltfShape8)
const transform423 = new Transform({
  position: new Vector3(48.5, 8.5, 26.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 0.75, -1)
})
wallPlainGlass104.addComponentOrReplace(transform423)

const wallPlainGlass105 = new Entity('wallPlainGlass105')
engine.addEntity(wallPlainGlass105)
wallPlainGlass105.setParent(_scene)
wallPlainGlass105.addComponentOrReplace(gltfShape8)
const transform424 = new Transform({
  position: new Vector3(48.5, 3, 26.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 1.5, -1)
})
wallPlainGlass105.addComponentOrReplace(transform424)

const wallPlainGlass106 = new Entity('wallPlainGlass106')
engine.addEntity(wallPlainGlass106)
wallPlainGlass106.setParent(_scene)
wallPlainGlass106.addComponentOrReplace(gltfShape8)
const transform425 = new Transform({
  position: new Vector3(48.5, 8.5, 29.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 0.75, -1)
})
wallPlainGlass106.addComponentOrReplace(transform425)

const wallPlainGlass107 = new Entity('wallPlainGlass107')
engine.addEntity(wallPlainGlass107)
wallPlainGlass107.setParent(_scene)
wallPlainGlass107.addComponentOrReplace(gltfShape8)
const transform426 = new Transform({
  position: new Vector3(48.5, 3, 29.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 1.5, -1)
})
wallPlainGlass107.addComponentOrReplace(transform426)

const wallPlainGlass108 = new Entity('wallPlainGlass108')
engine.addEntity(wallPlainGlass108)
wallPlainGlass108.setParent(_scene)
wallPlainGlass108.addComponentOrReplace(gltfShape8)
const transform427 = new Transform({
  position: new Vector3(48.5, 8.5, 20.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 0.75, -1)
})
wallPlainGlass108.addComponentOrReplace(transform427)

const wallPlainGlass109 = new Entity('wallPlainGlass109')
engine.addEntity(wallPlainGlass109)
wallPlainGlass109.setParent(_scene)
wallPlainGlass109.addComponentOrReplace(gltfShape8)
const transform428 = new Transform({
  position: new Vector3(48.5, 3, 20.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 1.5, -1)
})
wallPlainGlass109.addComponentOrReplace(transform428)

const wallPlainGlass110 = new Entity('wallPlainGlass110')
engine.addEntity(wallPlainGlass110)
wallPlainGlass110.setParent(_scene)
wallPlainGlass110.addComponentOrReplace(gltfShape8)
const transform429 = new Transform({
  position: new Vector3(48.5, 8.5, 23.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 0.75, -1)
})
wallPlainGlass110.addComponentOrReplace(transform429)

const wallPlainGlass111 = new Entity('wallPlainGlass111')
engine.addEntity(wallPlainGlass111)
wallPlainGlass111.setParent(_scene)
wallPlainGlass111.addComponentOrReplace(gltfShape8)
const transform430 = new Transform({
  position: new Vector3(48.5, 3, 23.5),
  rotation: new Quaternion(1.5014858600494022e-15, -0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.5, 1.5, -1)
})
wallPlainGlass111.addComponentOrReplace(transform430)

const wallPlainGlass112 = new Entity('wallPlainGlass112')
engine.addEntity(wallPlainGlass112)
wallPlainGlass112.setParent(_scene)
wallPlainGlass112.addComponentOrReplace(gltfShape8)
const transform431 = new Transform({
  position: new Vector3(48.5, 3, 17.5),
  rotation: new Quaternion(1.717422298633546e-16, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.0000004768371582, 1.5, 1.0000004768371582)
})
wallPlainGlass112.addComponentOrReplace(transform431)

const wallPlainGlass113 = new Entity('wallPlainGlass113')
engine.addEntity(wallPlainGlass113)
wallPlainGlass113.setParent(_scene)
wallPlainGlass113.addComponentOrReplace(gltfShape8)
const transform432 = new Transform({
  position: new Vector3(48.5, 8.5, 17.5),
  rotation: new Quaternion(1.717422298633546e-16, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1.0000004768371582, 0.7799999713897705, 1.0000004768371582)
})
wallPlainGlass113.addComponentOrReplace(transform432)

const whiteCar6 = new Entity('whiteCar6')
engine.addEntity(whiteCar6)
whiteCar6.setParent(_scene)
whiteCar6.addComponentOrReplace(gltfShape10)
const transform433 = new Transform({
  position: new Vector3(27.5, 0, 73.5),
  rotation: new Quaternion(1.0167317630719631e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000104904174805, 1, 1.5000107288360596)
})
whiteCar6.addComponentOrReplace(transform433)

const qrDonationsBlackbo6 = new Entity('qrDonationsBlackbo6')
engine.addEntity(qrDonationsBlackbo6)
qrDonationsBlackbo6.setParent(_scene)
const transform434 = new Transform({
  position: new Vector3(30.5, 0, 76.5),
  rotation: new Quaternion(-7.029745599038541e-16, 0.7071068286895752, -8.429368847373553e-8, -0.7071067094802856),
  scale: new Vector3(0.9999973773956299, 1, 0.9999973773956299)
})
qrDonationsBlackbo6.addComponentOrReplace(transform434)

const whiteCar7 = new Entity('whiteCar7')
engine.addEntity(whiteCar7)
whiteCar7.setParent(_scene)
whiteCar7.addComponentOrReplace(gltfShape10)
const transform435 = new Transform({
  position: new Vector3(13.5, 0, 73.5),
  rotation: new Quaternion(1.0167317630719631e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000109672546387, 1, 1.5000112056732178)
})
whiteCar7.addComponentOrReplace(transform435)

const qrDonationsBlackbo7 = new Entity('qrDonationsBlackbo7')
engine.addEntity(qrDonationsBlackbo7)
qrDonationsBlackbo7.setParent(_scene)
const transform436 = new Transform({
  position: new Vector3(16.5, 0, 76.5),
  rotation: new Quaternion(-7.029745599038541e-16, 0.7071068286895752, -8.429368847373553e-8, -0.7071067094802856),
  scale: new Vector3(0.9999971389770508, 1, 0.9999971389770508)
})
qrDonationsBlackbo7.addComponentOrReplace(transform436)

const whiteCar8 = new Entity('whiteCar8')
engine.addEntity(whiteCar8)
whiteCar8.setParent(_scene)
whiteCar8.addComponentOrReplace(gltfShape10)
const transform437 = new Transform({
  position: new Vector3(42.5, 0, 73.5),
  rotation: new Quaternion(1.0167317630719631e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000118017196655, 1, 1.5000120401382446)
})
whiteCar8.addComponentOrReplace(transform437)

const qrDonationsBlackbo8 = new Entity('qrDonationsBlackbo8')
engine.addEntity(qrDonationsBlackbo8)
qrDonationsBlackbo8.setParent(_scene)
const transform438 = new Transform({
  position: new Vector3(45.5, 0, 76.5),
  rotation: new Quaternion(-7.029745599038541e-16, 0.7071068286895752, -8.429368847373553e-8, -0.7071067094802856),
  scale: new Vector3(0.9999970197677612, 1, 0.9999970197677612)
})
qrDonationsBlackbo8.addComponentOrReplace(transform438)

const whiteCar9 = new Entity('whiteCar9')
engine.addEntity(whiteCar9)
whiteCar9.setParent(_scene)
whiteCar9.addComponentOrReplace(gltfShape10)
const transform439 = new Transform({
  position: new Vector3(42.5, 0, 62),
  rotation: new Quaternion(1.0167317630719631e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000122785568237, 1, 1.5000125169754028)
})
whiteCar9.addComponentOrReplace(transform439)

const qrDonationsBlackbo9 = new Entity('qrDonationsBlackbo9')
engine.addEntity(qrDonationsBlackbo9)
qrDonationsBlackbo9.setParent(_scene)
const transform440 = new Transform({
  position: new Vector3(45.5, 0, 65),
  rotation: new Quaternion(-7.029745599038541e-16, 0.7071068286895752, -8.429368847373553e-8, -0.7071067094802856),
  scale: new Vector3(0.9999969005584717, 1, 0.9999969005584717)
})
qrDonationsBlackbo9.addComponentOrReplace(transform440)

const whiteCar10 = new Entity('whiteCar10')
engine.addEntity(whiteCar10)
whiteCar10.setParent(_scene)
whiteCar10.addComponentOrReplace(gltfShape10)
const transform441 = new Transform({
  position: new Vector3(27.5, 0, 62),
  rotation: new Quaternion(1.0167317630719631e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000109672546387, 1, 1.5000112056732178)
})
whiteCar10.addComponentOrReplace(transform441)

const qrDonationsBlackbo10 = new Entity('qrDonationsBlackbo10')
engine.addEntity(qrDonationsBlackbo10)
qrDonationsBlackbo10.setParent(_scene)
const transform442 = new Transform({
  position: new Vector3(30.5, 0, 65),
  rotation: new Quaternion(-7.029745599038541e-16, 0.7071068286895752, -8.429368847373553e-8, -0.7071067094802856),
  scale: new Vector3(0.9999972581863403, 1, 0.9999972581863403)
})
qrDonationsBlackbo10.addComponentOrReplace(transform442)

const whiteCar11 = new Entity('whiteCar11')
engine.addEntity(whiteCar11)
whiteCar11.setParent(_scene)
whiteCar11.addComponentOrReplace(gltfShape10)
const transform443 = new Transform({
  position: new Vector3(13.5, 0, 62),
  rotation: new Quaternion(1.0167317630719631e-16, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000114440917969, 1, 1.500011682510376)
})
whiteCar11.addComponentOrReplace(transform443)

const qrDonationsBlackbo11 = new Entity('qrDonationsBlackbo11')
engine.addEntity(qrDonationsBlackbo11)
qrDonationsBlackbo11.setParent(_scene)
const transform444 = new Transform({
  position: new Vector3(16.5, 0, 65),
  rotation: new Quaternion(-7.029745599038541e-16, 0.7071068286895752, -8.429368847373553e-8, -0.7071067094802856),
  scale: new Vector3(0.9999970197677612, 1, 0.9999970197677612)
})
qrDonationsBlackbo11.addComponentOrReplace(transform444)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform445 = new Transform({
  position: new Vector3(18, 9.5, 39),
  rotation: new Quaternion(0.0693085640668869, -0.703701913356781, -0.06930849701166153, -0.703701913356781),
  scale: new Vector3(6.406289577484131, 5.139253616333008, 0.6375651359558105)
})
plainText2.addComponentOrReplace(transform445)

const plainText3 = new Entity('plainText3')
engine.addEntity(plainText3)
plainText3.setParent(_scene)
const transform446 = new Transform({
  position: new Vector3(18.5, 9.5, 40),
  rotation: new Quaternion(0.0693085640668869, -0.703701913356781, -0.06930849701166153, -0.703701913356781),
  scale: new Vector3(6.406286716461182, 5.3360466957092285, 1.228853464126587)
})
plainText3.addComponentOrReplace(transform446)

const bigTable = new Entity('bigTable')
engine.addEntity(bigTable)
bigTable.setParent(_scene)
const transform447 = new Transform({
  position: new Vector3(28, 3, 29),
  rotation: new Quaternion(2.2351741790771484e-8, 0.7071068286895752, -8.940696716308594e-8, 0.7071068286895752),
  scale: new Vector3(2.0000076293945312, 2.998913526535034, 1.5373425483703613)
})
bigTable.addComponentOrReplace(transform447)
const gltfShape13 = new GLTFShape("5e4c9eb9-0b1f-4e81-a56b-4c8be2c36e5e/Big_Table.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
bigTable.addComponentOrReplace(gltfShape13)

const conferenceTableRectangular = new Entity('conferenceTableRectangular')
engine.addEntity(conferenceTableRectangular)
conferenceTableRectangular.setParent(_scene)
const transform448 = new Transform({
  position: new Vector3(8.5, 3, 36),
  rotation: new Quaternion(3.56441670951624e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071068286895752),
  scale: new Vector3(2.5, 1.5, 2.000007390975952)
})
conferenceTableRectangular.addComponentOrReplace(transform448)
const gltfShape14 = new GLTFShape("fc34d92b-3add-4cba-9440-49fe09e6b957/scene.gltf")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
conferenceTableRectangular.addComponentOrReplace(gltfShape14)

const glassWall4 = new Entity('glassWall4')
engine.addEntity(glassWall4)
glassWall4.setParent(_scene)
const transform449 = new Transform({
  position: new Vector3(9, 0, 37.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glassWall4.addComponentOrReplace(transform449)
glassWall4.addComponentOrReplace(gltfShape6)

const chairHighBack = new Entity('chairHighBack')
engine.addEntity(chairHighBack)
chairHighBack.setParent(_scene)
const transform450 = new Transform({
  position: new Vector3(6, 3.000000238418579, 37.5),
  rotation: new Quaternion(-4.127578422959523e-15, -0.7071067690849304, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack.addComponentOrReplace(transform450)
const gltfShape15 = new GLTFShape("9cc4b4a2-46b6-4b49-aef9-da3959de0ac8/HighBackChair.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
chairHighBack.addComponentOrReplace(gltfShape15)

const chairHighBack2 = new Entity('chairHighBack2')
engine.addEntity(chairHighBack2)
chairHighBack2.setParent(_scene)
chairHighBack2.addComponentOrReplace(gltfShape15)
const transform451 = new Transform({
  position: new Vector3(6, 3, 36),
  rotation: new Quaternion(-4.127578422959523e-15, -0.7071067690849304, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack2.addComponentOrReplace(transform451)

const chairHighBack4 = new Entity('chairHighBack4')
engine.addEntity(chairHighBack4)
chairHighBack4.setParent(_scene)
chairHighBack4.addComponentOrReplace(gltfShape15)
const transform452 = new Transform({
  position: new Vector3(6, 2.999999761581421, 34.5),
  rotation: new Quaternion(-4.127578422959523e-15, -0.7071067690849304, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack4.addComponentOrReplace(transform452)

const chairHighBack3 = new Entity('chairHighBack3')
engine.addEntity(chairHighBack3)
chairHighBack3.setParent(_scene)
chairHighBack3.addComponentOrReplace(gltfShape15)
const transform453 = new Transform({
  position: new Vector3(6, 2.9999992847442627, 32.5),
  rotation: new Quaternion(-4.127578422959523e-15, -0.7071067690849304, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack3.addComponentOrReplace(transform453)

const chairHighBack5 = new Entity('chairHighBack5')
engine.addEntity(chairHighBack5)
chairHighBack5.setParent(_scene)
chairHighBack5.addComponentOrReplace(gltfShape15)
const transform454 = new Transform({
  position: new Vector3(6, 2.9999988079071045, 31),
  rotation: new Quaternion(-4.127578422959523e-15, -0.7071067690849304, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack5.addComponentOrReplace(transform454)

const chairHighBack6 = new Entity('chairHighBack6')
engine.addEntity(chairHighBack6)
chairHighBack6.setParent(_scene)
chairHighBack6.addComponentOrReplace(gltfShape15)
const transform455 = new Transform({
  position: new Vector3(6, 2.9999985694885254, 29.5),
  rotation: new Quaternion(-4.127578422959523e-15, -0.7071067690849304, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack6.addComponentOrReplace(transform455)

const chairHighBack7 = new Entity('chairHighBack7')
engine.addEntity(chairHighBack7)
chairHighBack7.setParent(_scene)
chairHighBack7.addComponentOrReplace(gltfShape15)
const transform456 = new Transform({
  position: new Vector3(6, 3.0000014305114746, 42.5),
  rotation: new Quaternion(-4.127578422959523e-15, -0.7071067690849304, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack7.addComponentOrReplace(transform456)

const chairHighBack8 = new Entity('chairHighBack8')
engine.addEntity(chairHighBack8)
chairHighBack8.setParent(_scene)
chairHighBack8.addComponentOrReplace(gltfShape15)
const transform457 = new Transform({
  position: new Vector3(6, 3.0000011920928955, 41),
  rotation: new Quaternion(-4.127578422959523e-15, -0.7071067690849304, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack8.addComponentOrReplace(transform457)

const chairHighBack9 = new Entity('chairHighBack9')
engine.addEntity(chairHighBack9)
chairHighBack9.setParent(_scene)
chairHighBack9.addComponentOrReplace(gltfShape15)
const transform458 = new Transform({
  position: new Vector3(6, 3.0000007152557373, 39.5),
  rotation: new Quaternion(-4.127578422959523e-15, -0.7071067690849304, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
chairHighBack9.addComponentOrReplace(transform458)

const chairHighBack10 = new Entity('chairHighBack10')
engine.addEntity(chairHighBack10)
chairHighBack10.setParent(_scene)
chairHighBack10.addComponentOrReplace(gltfShape15)
const transform459 = new Transform({
  position: new Vector3(11, 3, 43),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
chairHighBack10.addComponentOrReplace(transform459)

const chairHighBack11 = new Entity('chairHighBack11')
engine.addEntity(chairHighBack11)
chairHighBack11.setParent(_scene)
chairHighBack11.addComponentOrReplace(gltfShape15)
const transform460 = new Transform({
  position: new Vector3(11, 3, 41.5),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
chairHighBack11.addComponentOrReplace(transform460)

const chairHighBack12 = new Entity('chairHighBack12')
engine.addEntity(chairHighBack12)
chairHighBack12.setParent(_scene)
chairHighBack12.addComponentOrReplace(gltfShape15)
const transform461 = new Transform({
  position: new Vector3(11, 3, 40),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
chairHighBack12.addComponentOrReplace(transform461)

const chairHighBack13 = new Entity('chairHighBack13')
engine.addEntity(chairHighBack13)
chairHighBack13.setParent(_scene)
chairHighBack13.addComponentOrReplace(gltfShape15)
const transform462 = new Transform({
  position: new Vector3(11, 3, 38),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
chairHighBack13.addComponentOrReplace(transform462)

const chairHighBack14 = new Entity('chairHighBack14')
engine.addEntity(chairHighBack14)
chairHighBack14.setParent(_scene)
chairHighBack14.addComponentOrReplace(gltfShape15)
const transform463 = new Transform({
  position: new Vector3(11, 3, 36.5),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
chairHighBack14.addComponentOrReplace(transform463)

const chairHighBack15 = new Entity('chairHighBack15')
engine.addEntity(chairHighBack15)
chairHighBack15.setParent(_scene)
chairHighBack15.addComponentOrReplace(gltfShape15)
const transform464 = new Transform({
  position: new Vector3(11, 3, 35),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
chairHighBack15.addComponentOrReplace(transform464)

const chairHighBack16 = new Entity('chairHighBack16')
engine.addEntity(chairHighBack16)
chairHighBack16.setParent(_scene)
chairHighBack16.addComponentOrReplace(gltfShape15)
const transform465 = new Transform({
  position: new Vector3(11, 3, 33),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
chairHighBack16.addComponentOrReplace(transform465)

const chairHighBack17 = new Entity('chairHighBack17')
engine.addEntity(chairHighBack17)
chairHighBack17.setParent(_scene)
chairHighBack17.addComponentOrReplace(gltfShape15)
const transform466 = new Transform({
  position: new Vector3(11, 3, 31.5),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
chairHighBack17.addComponentOrReplace(transform466)

const chairHighBack18 = new Entity('chairHighBack18')
engine.addEntity(chairHighBack18)
chairHighBack18.setParent(_scene)
chairHighBack18.addComponentOrReplace(gltfShape15)
const transform467 = new Transform({
  position: new Vector3(11, 3, 30),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
chairHighBack18.addComponentOrReplace(transform467)

const videoScreenStanding = new Entity('videoScreenStanding')
engine.addEntity(videoScreenStanding)
videoScreenStanding.setParent(_scene)
const transform468 = new Transform({
  position: new Vector3(8.5, 3, 52),
  rotation: new Quaternion(-3.0393267977114327e-15, 1, -1.1920926823449918e-7, -7.450580596923828e-8),
  scale: new Vector3(1.5000007152557373, 1.5, 1.0000004768371582)
})
videoScreenStanding.addComponentOrReplace(transform468)

const woodenDoor = new Entity('woodenDoor')
engine.addEntity(woodenDoor)
woodenDoor.setParent(_scene)
const transform469 = new Transform({
  position: new Vector3(48.5, 3, 8.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(3.0000100135803223, 2, 1.000002384185791)
})
woodenDoor.addComponentOrReplace(transform469)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script1.spawn(invisibleRamp, {"enabled":true}, createChannel(channelId, invisibleRamp, channelBus))
script2.spawn(imageFromURL, {"image":"src/images/Maruti-Suzuki.png"}, createChannel(channelId, imageFromURL, channelBus))
script3.spawn(qrDonationsBlackbo, {"publicKey":"0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","text":"Model - XXX\nColor - XXX\nFuel Capacity - X Ltrs\n","fontSize":10}, createChannel(channelId, qrDonationsBlackbo, channelBus))
script3.spawn(qrDonationsBlackbo3, {"publicKey":"0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","text":"Model - XXX\nColor - XXX\nFuel Capacity - X Ltrs\n","fontSize":10}, createChannel(channelId, qrDonationsBlackbo3, channelBus))
script3.spawn(qrDonationsBlackbo2, {"publicKey":"0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","text":"Model - XXX\nColor - XXX\nFuel Capacity - X Ltrs\n","fontSize":10}, createChannel(channelId, qrDonationsBlackbo2, channelBus))
script3.spawn(qrDonationsBlackbo4, {"publicKey":"0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","text":"Model - XXX\nColor - XXX\nFuel Capacity - X Ltrs\n","fontSize":10}, createChannel(channelId, qrDonationsBlackbo4, channelBus))
script4.spawn(plainText, {"text":"MARUTI SUZUKI SHOWROOM","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText, channelBus))
script3.spawn(qrDonationsBlackbo5, {"publicKey":"0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","text":"Model - XXX\nColor - XXX\nFuel Capacity - X Ltrs\n","fontSize":10}, createChannel(channelId, qrDonationsBlackbo5, channelBus))
script3.spawn(qrDonationsBlackbo6, {"publicKey":"0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","text":"Model - XXX\nColor - XXX\nFuel Capacity - X Ltrs\n","fontSize":10}, createChannel(channelId, qrDonationsBlackbo6, channelBus))
script3.spawn(qrDonationsBlackbo7, {"publicKey":"0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","text":"Model - XXX\nColor - XXX\nFuel Capacity - X Ltrs\n","fontSize":10}, createChannel(channelId, qrDonationsBlackbo7, channelBus))
script3.spawn(qrDonationsBlackbo8, {"publicKey":"0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","text":"Model - XXX\nColor - XXX\nFuel Capacity - X Ltrs\n","fontSize":10}, createChannel(channelId, qrDonationsBlackbo8, channelBus))
script3.spawn(qrDonationsBlackbo9, {"publicKey":"0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","text":"Model - XXX\nColor - XXX\nFuel Capacity - X Ltrs\n","fontSize":10}, createChannel(channelId, qrDonationsBlackbo9, channelBus))
script3.spawn(qrDonationsBlackbo10, {"publicKey":"0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","text":"Model - XXX\nColor - XXX\nFuel Capacity - X Ltrs\n","fontSize":10}, createChannel(channelId, qrDonationsBlackbo10, channelBus))
script3.spawn(qrDonationsBlackbo11, {"publicKey":"0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx","text":"Model - XXX\nColor - XXX\nFuel Capacity - X Ltrs\n","fontSize":10}, createChannel(channelId, qrDonationsBlackbo11, channelBus))
script4.spawn(plainText2, {"text":"MARUTI SUZUKI SHOWROOM","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText2, channelBus))
script4.spawn(plainText3, {"text":"MARUTI SUZUKI SHOWROOM","font":"SF_Heavy","color":"#FFFFFF"}, createChannel(channelId, plainText3, channelBus))
script5.spawn(videoScreenStanding, {"startOn":true,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoScreenStanding","actionId":"toggle","values":{}}],"station":"https://theuniverse.club/live/genesisplaza/index.m3u8","onActivate":[{"entityName":"videoScreenStanding","actionId":"activate","values":{}},{"entityName":"invisibleRamp","actionId":"enable","values":{}}],"onDeactivate":[{"entityName":"videoScreenStanding","actionId":"deactivate","values":{}}],"customStation":"src/videos/mixkit-red-sports-car-74.mp4"}, createChannel(channelId, videoScreenStanding, channelBus))
script6.spawn(woodenDoor, {"onClickText":"Open/Close","onClick":[{"entityName":"woodenDoor","actionId":"toggle","values":{}}]}, createChannel(channelId, woodenDoor, channelBus))