# Exercise 1

## One dimension
Two points on one axis create one line and three points create two lines.
- This means in one dimension n points create `n-1` **lines**.
- Also **points** are just `n`.
- There cannot be any faces or voxels in one dimension.

## Two dimensions
Spanning open a second dimension (e.g. three points on each axis), we get the known two lines on the first dimension and that multiplied for each "row" the second dimension spans out. This works in direction of both axes.
- **Lines** for the second dimension go up to `(nx - 1) * ny` on the horizontal and `nx * (ny - 1)` on the vertical axis.
- The **points** just get multiplied for the total amount `nx * ny`.

Each square of four points creates a face or in another way two lines that go in different directions span out a face. Since there is `nx - 1` lines on the x-axis and `ny - 1` lines on the y-axis:
- There are `(nx - 1) * (ny - 1)` **faces** in two dimensions.
- No voxels can be created in two dimensions.

## Three dimensions
Points is rather straightforward, as they just get multiplied upwards. The z-axis is adding one layer of the amount of points that was on two dimensions for each of it's own points:
- The formula for calculating the **total amount of grid points** is: `nx * ny * nz`.

As on the second dimension we need to be aware of lines in all three directions. On the second dimension, we said that the `nx - 1` lines in the horizontal direction are multiplied by each "row" of the y-axis. Now additionally it needs to be multiplied by each "layer" of the z-axis. Since all three directions must be considered:
- The formula for calculating the **total amount of grid lines** is: `(nx − 1) * ny * nz + nx * (ny − 1) * nz + nx * ny * (nz − 1)`

Also for the faces each orientation matters now, as faces can now be orthogonal to each axis. We keep all our faces on a layer and multiply by the amount of layers in that direction for all three orientations.
- The formula for calculating the **total amount of grid faces** is: `nx * (ny − 1) * (nz − 1) + (nx − 1) * ny * (nz − 1) + (nx − 1) * (ny − 1) * nz`

Lastly the third dimension finally enables the existence of voxels. If we think about the classic cube (one voxel), it gets spanned open by one line in each direction, similar to the two dimensional face. The formula for the two dimensional face was `(nx - 1) * (ny - 1)`. Now we just add the lines of the third dimension:
- The formula for calculating the **total amount of grid voxels** is: `(nx - 1) * (ny - 1) * (nz - 1)`
