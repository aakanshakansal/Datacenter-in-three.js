// // import * as dat from 'dat.gui';
// // var gui = new dat.GUI();
// // console.log(gui)

// import * as THREE from "three";
// import * as dat from "dat.gui";
// class ModelPawn extends PawnBehavior {
//   setup() {
//     let trm = this.service("ThreeRenderManager");
//     let group = this.shape;

//     if (this.actor._cardData.toneMappingExposure !== undefined) {
//       trm.renderer.toneMappingExposure =
//         this.actor._cardData.toneMappingExposure;
//     }

//     const gltfLoader = new THREE.GLTFLoader();

//     this.lights = [];
//     let particles = ["particles1"];

//     // Create a promise to ensure the traversal runs after the model is loaded
//     const loadModelPromise = new Promise((resolve, reject) => {
//       gltfLoader.load(
//         "./assets/3d model datacenter/datacenter.glb",
//         (gltf) => {
//           const model = gltf.scene;

//           model.position.set(0, -1.6, 0);
//           const scaleFactor = 5;
//           model.scale.set(scaleFactor, scaleFactor, scaleFactor);

//           group.add(model);
//           // console.log(model.children[1].children[0].children[0].children[3].children[1].children);
//           resolve(model); // Resolve the promise with the loaded model
//         },
//         null,
//         reject
//       );
//     });

//     // Add particles above the server
//     loadModelPromise
//       .then((model) => {
//         const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, Green, Blue (you can add more colors as needed)

//         let colorIndex = 0;

//         const originalMaterials = new Map();

//         // Modify the traverseAndColor function to optionally restore original materials
//         function traverseAndColor(object, restore = false) {
//           // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
//           if (object.isMesh) {
//             if (restore) {
//               // Restore the original material if available
//               const originalMaterial = originalMaterials.get(object);
//               if (originalMaterial) {
//                 object.material = originalMaterial;
//               }
//             } else {
//               // Apply new color if restoring the original material is not requested
//               if (!originalMaterials.has(object)) {
//                 originalMaterials.set(object, object.material);
//               }
//               const color = colors[colorIndex % colors.length];
//               const material = new THREE.MeshBasicMaterial({
//                 color,
//                 transparent: true,
//                 opacity: 0.7,
//               });
//               object.material = material;
//               colorIndex++;
//             }
//           }

//           // Recursively traverse specific children based on the index condition
//           object.children.forEach((child, index) => {
//             if (index >= 2) {
//               // Only affect children with an index of 2 or higher
//               traverseAndColor(child, restore);
//             }
//           });
//         }

//         function traverseAndColor1(object, restore = false) {
//           // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
//           if (object.isMesh) {
//             if (restore) {
//               // Restore the original material if available
//               const originalMaterial = originalMaterials.get(object);
//               if (originalMaterial) {
//                 object.material = originalMaterial;
//               }
//             } else {
//               // Apply new color if restoring the original material is not requested
//               if (!originalMaterials.has(object)) {
//                 originalMaterials.set(object, object.material);
//               }
//               const color = colors[colorIndex % colors.length];
//               const material = new THREE.MeshBasicMaterial({ color });
//               object.material = material;
//               colorIndex++;
//             }
//           }
//           console.log(model);

//           // Recursively traverse specific children based on the index condition
//           object.children.forEach((child, index) => {
//             if (index >= 2) {
//               // Only affect children with an index of 2 or higher
//               traverseAndColor1(child, restore);
//             }
//           });
//         }
//         // function traverseAndColor2(object, restore = false, slideDirection = null, slideDistance = 0) {
//         //     // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
//         //     if (object.isMesh) {
//         //         if (restore) {
//         //             // Restore the original material if available
//         //             const originalMaterial = originalMaterials.get(object);
//         //             if (originalMaterial) {
//         //                 object.material = originalMaterial;
//         //             }
//         //         } else {
//         //             // Apply new color if restoring the original material is not requested
//         //             if (!originalMaterials.has(object)) {
//         //                 originalMaterials.set(object, object.material);
//         //             }
//         //             const color = colors[colorIndex % colors.length];
//         //             const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5 });
//         //             object.material = material;
//         //             colorIndex++;
//         //         }
//         //     }

//         //     // Slide the selected children if slideDirection is specified
//         //     if (slideDirection && object.children.length > 0) {
//         //         object.children.forEach(child => {
//         //             if (child.userData.selected) {
//         //                 // Slide the child based on the specified direction and distance
//         //                 switch (slideDirection) {
//         //                     case 'x':
//         //                         child.position.x += slideDistance;
//         //                         break;
//         //                     case 'y':
//         //                         child.position.y += slideDistance;
//         //                         break;
//         //                     case 'z':
//         //                         child.position.z += slideDistance;
//         //                         break;
//         //                     default:
//         //                     console.log("Slide direction");
//         //                         break;
//         //                 }
//         //             }
//         //         });
//         //     }

//         //     // Recursively traverse specific children based on the index condition
//         //     object.children.forEach((child, index) => {
//         //         if (index >= 2) { // Only affect children with an index of 2 or higher
//         //             traverseAndColor2(child, restore, slideDirection, slideDistance);
//         //         }
//         //     });
//         // }

//         function traverseAndColor2(object, restore = false) {
//           // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
//           if (object.isMesh) {
//             if (restore) {
//               // Restore the original material if available
//               const originalMaterial = originalMaterials.get(object);
//               if (originalMaterial) {
//                 object.material = originalMaterial;
//               }
//             } else {
//               // Apply new color if restoring the original material is not requested
//               if (!originalMaterials.has(object)) {
//                 originalMaterials.set(object, object.material);
//               }
//               const color = colors[colorIndex % colors.length];
//               const material = new THREE.MeshBasicMaterial({
//                 color,
//                 transparent: true,
//                 opacity: 0.5,
//               });
//               object.material = material;
//               colorIndex++;
//             }
//           }
//           console.log(model);

//           // Recursively traverse specific children based on the index condition
//           object.children.forEach((child, index) => {
//             if (index >= 2) {
//               // Only affect children with an index of 2 or higher
//               traverseAndColor2(child, restore);
//             }
//           });
//         }

//         // Adjust the GUI onChange handler to support toggling behavior

//         function createParticles() {
//           const particleGeometry = new THREE.SphereGeometry(0.1, 4, 4); // Radius, widthSegments, heightSegments
//           const particleCount = 4500;

//           for (let i = 0; i < particleCount; i++) {
//             // Random position above the server
//             const x = Math.random() * 23 - 10;
//             const y = Math.random() * 5 + 4; // Adjust as needed
//             const z = Math.random() * 25 - 10;

//             // Random color from red, green, blue, and yellow
//             // const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, green, blue, yellow
//             // const randomColor = colors[Math.floor(Math.random() * colors.length)];
//             const particleMaterial = new THREE.MeshBasicMaterial({
//               color: 0xffff00,
//               transparent: true,
//               opacity: 0.2,
//             });

//             const particle = new THREE.Mesh(particleGeometry, particleMaterial);
//             particle.position.set(x, y, z);
//             group.add(particle);
//             particles.push(particle);
//           }
//         }
//         function createParticles1() {
//           const particleGeometry = new THREE.SphereGeometry(0.1, 4, 4); // Radius, widthSegments, heightSegments
//           const particleCount = 4500;

//           for (let i = 0; i < particleCount; i++) {
//             // Random position above the server
//             const x = Math.random() * 23 - 10;
//             const y = Math.random() * 5 + 4; // Adjust as needed
//             const z = Math.random() * 25 - 1;

//             // Random color from red, green, blue, and yellow
//             // const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, green, blue, yellow
//             // const randomColor = colors[Math.floor(Math.random() * colors.length)];
//             const particleMaterial = new THREE.MeshBasicMaterial({
//               color: 0xff0000,
//               transparent: true,
//               opacity: 0.2,
//             });

//             const particle = new THREE.Mesh(particleGeometry, particleMaterial);
//             particle.position.set(x, y, z);
//             group.add(particle);
//             particles.push(particle);
//           }
//         }
//         function createParticles2() {
//           const particleGeometry = new THREE.SphereGeometry(0.1, 4, 4); // Radius, widthSegments, heightSegments
//           const particleCount = 4500;

//           for (let i = 0; i < particleCount; i++) {
//             // Random position above the server
//             const x = Math.random() * 23 - 10;
//             const y = Math.random() * 5 + 4; // Adjust as needed
//             const z = Math.random() * 10 - 1;

//             // Random color from red, green, blue, and yellow
//             // const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, green, blue, yellow
//             // const randomColor = colors[Math.floor(Math.random() * colors.length)];
//             const particleMaterial = new THREE.MeshBasicMaterial({
//               color: 0x00ff00,
//               transparent: true,
//               opacity: 0.2,
//             });

//             const particle = new THREE.Mesh(particleGeometry, particleMaterial);
//             particle.position.set(x, y, z);
//             group.add(particle);
//             particles.push(particle);
//           }
//         }

//         function createParticles3() {
//           const particleGeometry = new THREE.SphereGeometry(0.1, 4, 4); // Radius, widthSegments, heightSegments
//           const particleCount = 4500;

//           for (let i = 0; i < particleCount; i++) {
//             // Random position above the server
//             const x = Math.random() * 23 - 10;
//             const y = Math.random() * 5 + 4; // Adjust as needed
//             const z = Math.random() * -20;

//             // Random color from red, green, blue, and yellow
//             // const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, green, blue, yellow
//             // const randomColor = colors[Math.floor(Math.random() * colors.length)];
//             const particleMaterial = new THREE.MeshBasicMaterial({
//               color: 0x0000ff,
//               transparent: true,
//               opacity: 0.2,
//             });

//             const particle = new THREE.Mesh(particleGeometry, particleMaterial);
//             particle.position.set(x, y, z);
//             group.add(particle);
//             particles.push(particle);
//           }
//         }
//         // function createParticles3(colorIndex) {
//         //     const particleGeometry = new THREE.SphereGeometry(0.1, 4, 4); // Radius, widthSegments, heightSegments
//         //     const particleCount = 4500;

//         //     for (let i = 0; i < particleCount; i++) {
//         //         // Random position above the server
//         //         const x = Math.random() * 23 - 10;
//         //         const y = Math.random() * 5 + 4; // Adjust as needed
//         //         const z = Math.random() * -20;

//         //         let particleColor;

//         //         // Determine particle color based on colorIndex
//         //         if (colorIndex === 2 || colorIndex === 4) {
//         //             // Green particles
//         //             particleColor = 0x00ff00;
//         //         } else if (colorIndex === 3 || (colorIndex >= 3 && colorIndex <= 7)) {
//         //             // Red particles
//         //             particleColor = 0xff0000;
//         //         } else {
//         //             // Default color
//         //             particleColor = 0x0000ff; // Blue
//         //         }

//         //         const particleMaterial = new THREE.MeshBasicMaterial({ color: particleColor, transparent: true, opacity: 0.2 });

//         //         const particle = new THREE.Mesh(particleGeometry, particleMaterial);
//         //         particle.position.set(x, y, z);
//         //         group.add(particle);
//         //         particles.push(particle);
//         //     }
//         // }

//         function call() {
//           createParticles();
//           createParticles1();
//           createParticles2();
//           createParticles3();
//         }

//         var gui = new dat.GUI();
//         console.log(gui);
//         var obj = {
//           traverseAndColor: false, // Initial state of the checkbox
//         };
//         var obj2 = {
//           traverseAndColor1: false, // Initial state of the checkbox
//         };
//         var obj3 = {
//           traverseAndColor2: false, // Initial state of the checkbox
//         };
//         gui
//           .add(obj, "traverseAndColor")
//           .name("Temp. view1")
//           .onChange(function (value) {
//             if (value) {
//               for (let i = 3; i <= 22; i++) {
//                 traverseAndColor(
//                   model.children[1].children[0].children[0].children[i],
//                   false
//                 );
//                 // console.log(model) // Assuming starting traversal from the root of the model
//               }
//             } else {
//               for (let i = 3; i <= 22; i++) {
//                 traverseAndColor(
//                   model.children[1].children[0].children[0].children[i],
//                   true
//                 );
//                 // console.log(model) // Assuming starting traversal from the root of the model
//               } // Restore original materials
//             }
//           });
//         gui
//           .add(obj2, "traverseAndColor1")
//           .name("Load")
//           .onChange(function (value) {
//             if (value) {
//               // Apply new materials when the toggle is on
//               traverseAndColor1(
//                 model.children[1].children[0].children[0],
//                 false
//               ); // 'false' indicates we're not restoring materials
//             } else {
//               // Restore original materials when the toggle is off
//               traverseAndColor1(
//                 model.children[1].children[0].children[0],
//                 true
//               ); // 'true' to restore materials
//             }
//           });
//         gui
//           .add(obj3, "traverseAndColor2")
//           .name("Glass")
//           .onChange(function (value) {
//             if (value) {
//               for (let i = 3; i <= 22; i++) {
//                 traverseAndColor2(
//                   model.children[1].children[0].children[0].children[i]
//                     .children[0],
//                   false
//                 );
//                 // Assuming starting traversal from the root of the model
//               }
//               for (let i = 3; i <= 22; i++) {
//                 traverseAndColor2(
//                   model.children[1].children[0].children[0].children[i]
//                     .children[1].children[0],
//                   false
//                 );
//                 // Assuming starting traversal from the root of the model
//               }
//             } else {
//               for (let i = 3; i <= 22; i++) {
//                 traverseAndColor2(
//                   model.children[1].children[0].children[0].children[i]
//                     .children[0],
//                   true
//                 );
//                 // console.log(model) // Assuming starting traversal from the root of the model
//               }
//               for (let i = 3; i <= 22; i++) {
//                 traverseAndColor2(
//                   model.children[1].children[0].children[0].children[i]
//                     .children[1].children[0],
//                   true
//                 );
//                 // console.log(model) // Assuming starting traversal from the root of the model
//               } // Restore original materials
//             }
//           });
//         console.log(model);

//         var obj1 = {
//           call: false, // Initial state of the checkbox
//         };

//         gui
//           .add(obj1, "call")
//           .name("Particles1")
//           .onChange(function (value) {
//             if (value) {
//               call();
//             } else {
//               // Remove all particles from the group
//               particles.forEach((particle) => {
//                 group.remove(particle);
//               });
//               // Clear the array
//               particles = [];
//             }
//           });

//         // Other functions and code for creating particles, etc.
//       })
//       .catch((error) => {
//         console.error("Error loading GLTF model:", error);
//       });

//     this.listen("updateShape", "updateShape");
//   }

//   teardown() {
//     let scene = this.service("ThreeRenderManager").scene;
//     scene.background?.dispose();
//     scene.environment?.dispose();
//     scene.background = null;
//     scene.environment = null;
//   }

//   updateShape(options) {
//     this.constructBackground(options);
//   }

//   update(_time) {
//     if (this.csm) this.csm.update();
//   }
// }

// export default {
//   modules: [
//     {
//       name: "Model1",
//       pawnBehaviors: [ModelPawn],
//     },
//   ],
// };

// import * as dat from 'dat.gui';
// var gui = new dat.GUI();
// console.log(gui)

import * as THREE from "three";
import * as dat from "dat.gui";
class ModelPawn extends PawnBehavior {
  setup() {
    let trm = this.service("ThreeRenderManager");
    let group = this.shape;

    if (this.actor._cardData.toneMappingExposure !== undefined) {
      trm.renderer.toneMappingExposure =
        this.actor._cardData.toneMappingExposure;
    }

    const gltfLoader = new THREE.GLTFLoader();

    this.lights = [];
    let particles = ["particles1"];

    // Create a promise to ensure the traversal runs after the model is loaded
    const loadModelPromise = new Promise((resolve, reject) => {
      gltfLoader.load(
        "./assets/3d/datacenter.glb",
        (gltf) => {
          const model = gltf.scene;

          model.position.set(0, -1.6, 0);
          const scaleFactor = 5;
          model.scale.set(scaleFactor, scaleFactor, scaleFactor);

          group.add(model);
          // console.log(model.children[1].children[0].children[0].children[3].children[1].children);
          resolve(model); // Resolve the promise with the loaded model
        },
        null,
        reject
      );
    });

    // Add particles above the server
    loadModelPromise
      .then((model) => {
        const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, Green, Blue (you can add more colors as needed)

        let colorIndex = 0;

        const originalMaterials = new Map();

        // Modify the traverseAndColor function to optionally restore original materials
        function traverseAndColor(object, restore = false) {
          // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
          if (object.isMesh) {
            if (restore) {
              // Restore the original material if available
              const originalMaterial = originalMaterials.get(object);
              if (originalMaterial) {
                object.material = originalMaterial;
              }
            } else {
              // Apply new color if restoring the original material is not requested
              if (!originalMaterials.has(object)) {
                originalMaterials.set(object, object.material);
              }
              const color = colors[colorIndex % colors.length];
              const material = new THREE.MeshBasicMaterial({
                color,
                transparent: true,
                opacity: 0.7,
              });
              object.material = material;
              colorIndex++;
            }
          }

          // Recursively traverse specific children based on the index condition
          object.children.forEach((child, index) => {
            if (index >= 2) {
              // Only affect children with an index of 2 or higher
              traverseAndColor(child, restore);
            }
          });
        }

        function traverseAndColor1(object, restore = false) {
          // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
          if (object.isMesh) {
            if (restore) {
              // Restore the original material if available
              const originalMaterial = originalMaterials.get(object);
              if (originalMaterial) {
                object.material = originalMaterial;
              }
            } else {
              // Apply new color if restoring the original material is not requested
              if (!originalMaterials.has(object)) {
                originalMaterials.set(object, object.material);
              }
              const color = colors[colorIndex % colors.length];
              const material = new THREE.MeshBasicMaterial({ color });
              object.material = material;
              colorIndex++;
            }
          }
          console.log(model);

          // Recursively traverse specific children based on the index condition
          object.children.forEach((child, index) => {
            if (index >= 2) {
              // Only affect children with an index of 2 or higher
              traverseAndColor1(child, restore);
            }
          });
        }
        // function traverseAndColor2(object, restore = false, slideDirection = null, slideDistance = 0) {
        //     // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
        //     if (object.isMesh) {
        //         if (restore) {
        //             // Restore the original material if available
        //             const originalMaterial = originalMaterials.get(object);
        //             if (originalMaterial) {
        //                 object.material = originalMaterial;
        //             }
        //         } else {
        //             // Apply new color if restoring the original material is not requested
        //             if (!originalMaterials.has(object)) {
        //                 originalMaterials.set(object, object.material);
        //             }
        //             const color = colors[colorIndex % colors.length];
        //             const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5 });
        //             object.material = material;
        //             colorIndex++;
        //         }
        //     }

        //     // Slide the selected children if slideDirection is specified
        //     if (slideDirection && object.children.length > 0) {
        //         object.children.forEach(child => {
        //             if (child.userData.selected) {
        //                 // Slide the child based on the specified direction and distance
        //                 switch (slideDirection) {
        //                     case 'x':
        //                         child.position.x += slideDistance;
        //                         break;
        //                     case 'y':
        //                         child.position.y += slideDistance;
        //                         break;
        //                     case 'z':
        //                         child.position.z += slideDistance;
        //                         break;
        //                     default:
        //                     console.log("Slide direction");
        //                         break;
        //                 }
        //             }
        //         });
        //     }

        //     // Recursively traverse specific children based on the index condition
        //     object.children.forEach((child, index) => {
        //         if (index >= 2) { // Only affect children with an index of 2 or higher
        //             traverseAndColor2(child, restore, slideDirection, slideDistance);
        //         }
        //     });
        // }

        function traverseAndColor2(object, restore = false) {
          // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
          if (object.isMesh) {
            if (restore) {
              // Restore the original material if available
              const originalMaterial = originalMaterials.get(object);
              if (originalMaterial) {
                object.material = originalMaterial;
              }
            } else {
              // Apply new color if restoring the original material is not requested
              if (!originalMaterials.has(object)) {
                originalMaterials.set(object, object.material);
              }
              const color = colors[colorIndex % colors.length];
              const material = new THREE.MeshBasicMaterial({
                color,
                transparent: true,
                opacity: 0.5,
              });
              object.material = material;
              colorIndex++;
            }
          }
          console.log(model);

          // Recursively traverse specific children based on the index condition
          object.children.forEach((child, index) => {
            if (index >= 2) {
              // Only affect children with an index of 2 or higher
              traverseAndColor2(child, restore);
            }
          });
        }
        function traverseAndColor3(object, restore = false) {
          // If the object is a mesh and it's within the desired range of children indices, apply the color or restore material
          if (object.isMesh) {
            if (restore) {
              // Restore the original material if available
              const originalMaterial = originalMaterials.get(object);
              if (originalMaterial) {
                object.material = originalMaterial;
              }
            } else {
              // Apply new texture if restoring the original material is not requested
              if (!originalMaterials.has(object)) {
                originalMaterials.set(object, object.material);
              }
              // Load texture
              const textureLoader = new THREE.TextureLoader();
              textureLoader.load("./assets/Texture.jpg", (texture) => {
                const material = new THREE.MeshBasicMaterial({
                  map: texture,
                  transparent: true,
                  opacity: 0.8,
                });
                object.material = material;
              });
            }
          }

          // Recursively traverse specific children based on the index condition
          object.children.forEach((child, index) => {
            if (index >= 2) {
              // Only affect children with an index of 2 or higher
              traverseAndColor3(child, restore);
            }
          });
        }

        // Adjust the GUI onChange handler to support toggling behavior

        function createParticles() {
          const particleGeometry = new THREE.SphereGeometry(0.1, 4, 4); // Radius, widthSegments, heightSegments
          const particleCount = 4500;

          for (let i = 0; i < particleCount; i++) {
            // Random position above the server
            const x = Math.random() * 23 - 10;
            const y = Math.random() * 5 + 4; // Adjust as needed
            const z = Math.random() * 25 - 10;

            // Random color from red, green, blue, and yellow
            // const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, green, blue, yellow
            // const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const particleMaterial = new THREE.MeshBasicMaterial({
              color: 0xffff00,
              transparent: true,
              opacity: 0.2,
            });

            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            particle.position.set(x, y, z);
            group.add(particle);
            particles.push(particle);
          }
        }
        function createParticles1() {
          const particleGeometry = new THREE.SphereGeometry(0.1, 4, 4); // Radius, widthSegments, heightSegments
          const particleCount = 4500;

          for (let i = 0; i < particleCount; i++) {
            // Random position above the server
            const x = Math.random() * 23 - 10;
            const y = Math.random() * 5 + 4; // Adjust as needed
            const z = Math.random() * 25 - 1;

            // Random color from red, green, blue, and yellow
            // const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, green, blue, yellow
            // const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const particleMaterial = new THREE.MeshBasicMaterial({
              color: 0xff0000,
              transparent: true,
              opacity: 0.2,
            });

            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            particle.position.set(x, y, z);
            group.add(particle);
            particles.push(particle);
          }
        }
        function createParticles2() {
          const particleGeometry = new THREE.SphereGeometry(0.1, 4, 4); // Radius, widthSegments, heightSegments
          const particleCount = 4500;

          for (let i = 0; i < particleCount; i++) {
            // Random position above the server
            const x = Math.random() * 23 - 10;
            const y = Math.random() * 5 + 4; // Adjust as needed
            const z = Math.random() * 10 - 1;

            // Random color from red, green, blue, and yellow
            // const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, green, blue, yellow
            // const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const particleMaterial = new THREE.MeshBasicMaterial({
              color: 0x00ff00,
              transparent: true,
              opacity: 0.2,
            });

            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            particle.position.set(x, y, z);
            group.add(particle);
            particles.push(particle);
          }
        }

        function createParticles3() {
          const particleGeometry = new THREE.SphereGeometry(0.1, 4, 4); // Radius, widthSegments, heightSegments
          const particleCount = 4500;

          for (let i = 0; i < particleCount; i++) {
            // Random position above the server
            const x = Math.random() * 23 - 10;
            const y = Math.random() * 5 + 4; // Adjust as needed
            const z = Math.random() * -20;

            // Random color from red, green, blue, and yellow
            // const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00]; // Red, green, blue, yellow
            // const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const particleMaterial = new THREE.MeshBasicMaterial({
              color: 0x0000ff,
              transparent: true,
              opacity: 0.2,
            });

            const particle = new THREE.Mesh(particleGeometry, particleMaterial);
            particle.position.set(x, y, z);
            group.add(particle);
            particles.push(particle);
          }
        }
        // function createParticles3(colorIndex) {
        //     const particleGeometry = new THREE.SphereGeometry(0.1, 4, 4); // Radius, widthSegments, heightSegments
        //     const particleCount = 4500;

        //     for (let i = 0; i < particleCount; i++) {
        //         // Random position above the server
        //         const x = Math.random() * 23 - 10;
        //         const y = Math.random() * 5 + 4; // Adjust as needed
        //         const z = Math.random() * -20;

        //         let particleColor;

        //         // Determine particle color based on colorIndex
        //         if (colorIndex === 2 || colorIndex === 4) {
        //             // Green particles
        //             particleColor = 0x00ff00;
        //         } else if (colorIndex === 3 || (colorIndex >= 3 && colorIndex <= 7)) {
        //             // Red particles
        //             particleColor = 0xff0000;
        //         } else {
        //             // Default color
        //             particleColor = 0x0000ff; // Blue
        //         }

        //         const particleMaterial = new THREE.MeshBasicMaterial({ color: particleColor, transparent: true, opacity: 0.2 });

        //         const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        //         particle.position.set(x, y, z);
        //         group.add(particle);
        //         particles.push(particle);
        //     }
        // }

        function call() {
          createParticles();
          createParticles1();
          createParticles2();
          createParticles3();
        }

        var gui = new dat.GUI();
        console.log(gui);
        var obj = {
          traverseAndColor: false, // Initial state of the checkbox
        };
        var obj2 = {
          traverseAndColor1: false, // Initial state of the checkbox
        };
        var obj3 = {
          traverseAndColor2: false, // Initial state of the checkbox
        };
        gui
          .add(obj, "traverseAndColor")
          .name("Temp. view1")
          .onChange(function (value) {
            if (value) {
              for (let i = 3; i <= 22; i++) {
                traverseAndColor(
                  model.children[1].children[0].children[0].children[i],
                  false
                );
                // console.log(model) // Assuming starting traversal from the root of the model
              }
            } else {
              for (let i = 3; i <= 22; i++) {
                traverseAndColor(
                  model.children[1].children[0].children[0].children[i],
                  true
                );
                // console.log(model) // Assuming starting traversal from the root of the model
              } // Restore original materials
            }
          });
        gui
          .add(obj2, "traverseAndColor1")
          .name("Load")
          .onChange(function (value) {
            if (value) {
              // Apply new materials when the toggle is on
              traverseAndColor1(
                model.children[1].children[0].children[0],
                false
              ); // 'false' indicates we're not restoring materials
            } else {
              // Restore original materials when the toggle is off
              traverseAndColor1(
                model.children[1].children[0].children[0],
                true
              ); // 'true' to restore materials
            }
          });
        gui
          .add(obj3, "traverseAndColor2")
          .name("Glass")
          .onChange(function (value) {
            if (value) {
              for (let i = 3; i <= 22; i++) {
                traverseAndColor2(
                  model.children[1].children[0].children[0].children[i]
                    .children[0],
                  false
                );
                // Assuming starting traversal from the root of the model
              }
              for (let i = 3; i <= 22; i++) {
                traverseAndColor2(
                  model.children[1].children[0].children[0].children[i]
                    .children[1].children[0],
                  false
                );
                // Assuming starting traversal from the root of the model
              }
            } else {
              for (let i = 3; i <= 22; i++) {
                traverseAndColor2(
                  model.children[1].children[0].children[0].children[i]
                    .children[0],
                  true
                );
                // console.log(model) // Assuming starting traversal from the root of the model
              }
              for (let i = 3; i <= 22; i++) {
                traverseAndColor2(
                  model.children[1].children[0].children[0].children[i]
                    .children[1].children[0],
                  true
                );
                // console.log(model) // Assuming starting traversal from the root of the model
              } // Restore original materials
            }
          });
        console.log(model);

        var obj1 = {
          call: false, // Initial state of the checkbox
        };

        gui
          .add(obj1, "call")
          .name("Particles1")
          .onChange(function (value) {
            if (value) {
              call();
            } else {
              // Remove all particles from the group
              particles.forEach((particle) => {
                group.remove(particle);
              });
              // Clear the array
              particles = [];
            }
          });
        var obj4 = {
          traverseAndColor3: false, // Initial state of the checkbox
        };
        gui
          .add(obj4, "traverseAndColor3")
          .name("CFD")
          .onChange(function (value) {
            if (value) {
              for (let i = 3; i <= 22; i++) {
                traverseAndColor3(
                  model.children[1].children[0].children[0].children[i]
                    .children[1].children[1],
                  false
                );
              }
            } else {
              for (let i = 3; i <= 22; i++) {
                traverseAndColor3(
                  model.children[1].children[0].children[0].children[i]
                    .children[1].children[1],
                  true
                );
              }
            }
          });

        // Other functions and code for creating particles, etc.
      })
      .catch((error) => {
        console.error("Error loading GLTF model:", error);
      });

    this.listen("updateShape", "updateShape");
  }

  teardown() {
    let scene = this.service("ThreeRenderManager").scene;
    scene.background?.dispose();
    scene.environment?.dispose();
    scene.background = null;
    scene.environment = null;
  }

  updateShape(options) {
    this.constructBackground(options);
  }

  update(_time) {
    if (this.csm) this.csm.update();
  }
}

export default {
  modules: [
    {
      name: "Model1",
      pawnBehaviors: [ModelPawn],
    },
  ],
};
